"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import type { Painting } from "@/data/paintings";

interface LightboxProps {
  painting: Painting | null;
  paintings: Painting[];
  onClose: () => void;
  onNavigate: (painting: Painting) => void;
}

export default function Lightbox({
  painting,
  paintings,
  onClose,
  onNavigate,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const currentIndex = painting
    ? paintings.findIndex((p) => p.id === painting.id)
    : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < paintings.length - 1;

  const goToPrev = useCallback(() => {
    if (hasPrev) onNavigate(paintings[currentIndex - 1]);
  }, [hasPrev, currentIndex, paintings, onNavigate]);

  const goToNext = useCallback(() => {
    if (hasNext) onNavigate(paintings[currentIndex + 1]);
  }, [hasNext, currentIndex, paintings, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!painting) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [painting, onClose, goToPrev, goToNext]);

  useEffect(() => {
    if (painting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [painting]);

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  if (!painting) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0e0e0e]/95 backdrop-blur-sm" />

      {/* Close button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center border border-[#2a2a2a] text-[#888888] hover:text-[#f5f0ea] hover:border-[#c9a84c]/50 transition-all duration-200 cursor-pointer bg-[#181818]"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev button */}
      {hasPrev && (
        <button
          id="lightbox-prev-btn"
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-[#2a2a2a] text-[#888888] hover:text-[#f5f0ea] hover:border-[#c9a84c]/50 transition-all duration-200 cursor-pointer bg-[#181818]/80 backdrop-blur-sm hidden md:flex"
          aria-label="Previous painting"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          id="lightbox-next-btn"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-[#2a2a2a] text-[#888888] hover:text-[#f5f0ea] hover:border-[#c9a84c]/50 transition-all duration-200 cursor-pointer bg-[#181818]/80 backdrop-blur-sm hidden md:flex"
          aria-label="Next painting"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Main container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-0 bg-[#181818] border border-[#2a2a2a] shadow-2xl max-h-[90vh] overflow-hidden">
        {/* Image side */}
        <div className="flex-1 bg-[#131313] flex items-center justify-center min-h-[250px] overflow-hidden">
          <Image
            src={painting.image}
            alt={painting.title}
            width={900}
            height={700}
            className="w-full h-full object-contain max-h-[60vh] lg:max-h-[85vh]"
            unoptimized
          />
        </div>

        {/* Details side */}
        <div className="w-full lg:w-80 xl:w-96 flex flex-col p-7 overflow-y-auto">
          {/* Category + Year */}
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
            {painting.category} · {painting.year}
          </p>

          {/* Title */}
          <h2 className="font-[family-name:var(--font-display)] text-2xl xl:text-3xl text-[#f5f0ea] font-bold leading-tight mb-5">
            {painting.title}
          </h2>

          {/* Divider */}
          <div className="w-10 h-px bg-[#c9a84c] mb-5" />

          {/* Details grid */}
          <dl className="space-y-3 mb-6">
            <div>
              <dt className="text-[10px] tracking-[0.25em] uppercase text-[#888888] mb-0.5">
                Technique
              </dt>
              <dd className="text-sm text-[#e8e0d4]">{painting.technique}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.25em] uppercase text-[#888888] mb-0.5">
                Dimensions
              </dt>
              <dd className="text-sm text-[#e8e0d4]">{painting.dimensions}</dd>
            </div>
          </dl>

          {/* Description */}
          <p className="text-sm text-[#888888] leading-relaxed flex-1 mb-7">
            {painting.description}
          </p>

          {/* CTA */}
          <button
            id={`lightbox-inquire-btn-${painting.id}`}
            onClick={scrollToContact}
            className="w-full border border-[#c9a84c] text-[#c9a84c] px-6 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0e0e0e] transition-all duration-300 cursor-pointer"
          >
            Inquire About This Piece
          </button>

          {/* Mobile prev/next */}
          <div className="flex gap-3 mt-3 lg:hidden">
            <button
              onClick={goToPrev}
              disabled={!hasPrev}
              className="flex-1 border border-[#2a2a2a] text-[#888888] py-2.5 text-xs tracking-widest uppercase disabled:opacity-30 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
            >
              ← Prev
            </button>
            <button
              onClick={goToNext}
              disabled={!hasNext}
              className="flex-1 border border-[#2a2a2a] text-[#888888] py-2.5 text-xs tracking-widest uppercase disabled:opacity-30 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>

          {/* Counter */}
          <p className="text-center text-[10px] tracking-[0.2em] text-[#2a2a2a] mt-4">
            {currentIndex + 1} / {paintings.length}
          </p>
        </div>
      </div>
    </div>
  );
}
