"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  featuredImage?: string;
}

export default function Hero({ featuredImage }: HeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToGallery = () => {
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {featuredImage && (
        <div className="absolute inset-0">
          <Image
            src={featuredImage}
            alt="Featured artwork"
            fill
            className="object-cover opacity-25"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/60 via-[#0e0e0e]/50 to-[#0e0e0e]" />
        </div>
      )}

      {/* Gradient fallback */}
      {!featuredImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#181818] to-[#0e0e0e]" />
      )}

      {/* Decorative orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p
          className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6"
          style={{ transitionDelay: "0.1s" }}
        >
          Fine Art · Original Paintings
        </p>

        <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-8xl font-bold text-[#f5f0ea] leading-tight mb-6">
          Aria Voss
        </h1>

        <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-8" />

        <p className="text-lg md:text-xl text-[#888888] leading-relaxed max-w-2xl mx-auto mb-12 font-[family-name:var(--font-body)] font-light">
          I paint light. Whether it falls across water at dawn, across a winter
          village at dusk, or across a human face — light is what moves me. Each
          canvas is an attempt to hold a moment that refuses to stay still.
        </p>

        <button
          onClick={scrollToGallery}
          id="hero-view-gallery-btn"
          className="group inline-flex items-center gap-3 border border-[#c9a84c]/50 text-[#c9a84c] px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0e0e0e] transition-all duration-300 cursor-pointer"
        >
          View Gallery
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#2a2a2a]">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-[#2a2a2a]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
