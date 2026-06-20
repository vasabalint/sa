"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0e0e0e]/90 backdrop-blur-md border-b border-[#2a2a2a] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left group cursor-pointer"
          aria-label="Back to top"
        >
          <span className="block font-[family-name:var(--font-display)] text-xl font-bold text-[#f5f0ea] tracking-wide group-hover:text-[#c9a84c] transition-colors duration-300">
            Aria Voss
          </span>
          <span className="block text-[10px] tracking-[0.25em] uppercase text-[#888888] group-hover:text-[#c9a84c]/70 transition-colors duration-300">
            Painter & Fine Artist
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm tracking-[0.15em] uppercase text-[#888888] hover:text-[#c9a84c] transition-colors duration-300 cursor-pointer relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:bg-[#c9a84c] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#e8e0d4] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#e8e0d4] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#e8e0d4] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#181818]/95 backdrop-blur-md border-t border-[#2a2a2a] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm tracking-[0.15em] uppercase text-[#888888] hover:text-[#c9a84c] transition-colors duration-300 text-left cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
