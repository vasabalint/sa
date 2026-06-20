"use client";

import { useState } from "react";
import type { Painting } from "@/data/paintings";
import PaintingCard from "./PaintingCard";
import Lightbox from "./Lightbox";

interface GalleryProps {
  paintings: Painting[];
  categories: string[];
}

export default function Gallery({ paintings, categories }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  const filtered =
    activeCategory === "All"
      ? paintings
      : paintings.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section heading */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
          Original Works
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#f5f0ea] mb-6">
          The Gallery
        </h2>
        <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
        <p className="text-[#888888] max-w-xl mx-auto text-sm leading-relaxed">
          Each work is an original, painted by hand in oils. Click any piece to
          see full details, and use the contact form below to enquire about
          availability.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`filter-${cat.toLowerCase()}`}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "border-[#c9a84c] bg-[#c9a84c] text-[#0e0e0e]"
                : "border-[#2a2a2a] text-[#888888] hover:border-[#c9a84c]/50 hover:text-[#c9a84c]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
        style={{ columnGap: "1rem" }}
      >
        {filtered.map((painting, index) => (
          <PaintingCard
            key={painting.id}
            painting={painting}
            index={index}
            onClick={(p) => setSelectedPainting(p)}
          />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-[#888888]">
          <p>No paintings in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        painting={selectedPainting}
        paintings={filtered}
        onClose={() => setSelectedPainting(null)}
        onNavigate={(p) => setSelectedPainting(p)}
      />
    </section>
  );
}
