"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-[#2a2a2a] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          onClick={scrollToTop}
          className="font-[family-name:var(--font-display)] text-lg text-[#f5f0ea]/60 hover:text-[#c9a84c] transition-colors duration-300 cursor-pointer"
        >
          Aria Voss
        </button>

        <p className="text-xs tracking-[0.2em] text-[#888888]/50 uppercase">
          © {year} All Rights Reserved
        </p>

        <div className="flex items-center gap-6">
          {[
            { href: "#gallery", label: "Gallery" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <button
              key={link.href}
              onClick={() =>
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-xs tracking-[0.15em] uppercase text-[#888888]/50 hover:text-[#c9a84c] transition-colors duration-300 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
