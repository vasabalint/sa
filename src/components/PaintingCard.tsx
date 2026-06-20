"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Painting } from "@/data/paintings";

interface PaintingCardProps {
  painting: Painting;
  onClick: (painting: Painting) => void;
  index: number;
}

export default function PaintingCard({
  painting,
  onClick,
  index,
}: PaintingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`break-inside-avoid mb-4 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <button
        id={`painting-card-${painting.id}`}
        onClick={() => onClick(painting)}
        className="group relative block w-full overflow-hidden bg-[#181818] border border-[#2a2a2a] hover:border-[#c9a84c]/40 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_8px_40px_rgba(201,168,76,0.12)]"
        aria-label={`View ${painting.title}`}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={painting.image}
            alt={painting.title}
            width={800}
            height={600}
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/90 via-[#0e0e0e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

          {/* Hover content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-1">
              {painting.category} · {painting.year}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-xl text-[#f5f0ea] font-semibold">
              {painting.title}
            </h3>
            <p className="text-xs text-[#888888] mt-1">{painting.technique}</p>
          </div>

          {/* View icon */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#c9a84c] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
            <svg
              className="w-4 h-4 text-[#0e0e0e]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 3h6m0 0v6m0-6L13 11M4 7H2m0 0V5m0 2l5-5M4 17H2m0 0v2m0-2l5 5M20 17h2m0 0v2m0-2l-5 5"
              />
            </svg>
          </div>
        </div>

        {/* Card footer (always visible) */}
        <div className="px-4 py-3 border-t border-[#2a2a2a] group-hover:border-[#c9a84c]/20 transition-colors duration-300">
          <h3 className="font-[family-name:var(--font-display)] text-base text-[#e8e0d4] truncate">
            {painting.title}
          </h3>
          <p className="text-xs text-[#888888] mt-0.5">{painting.dimensions}</p>
        </div>
      </button>
    </div>
  );
}
