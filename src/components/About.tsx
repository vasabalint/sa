export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            The Artist
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#f5f0ea] mb-6">
            About Aria Voss
          </h2>
          <div className="w-12 h-px bg-[#c9a84c] mb-8" />

          <div className="space-y-4 text-[#888888] text-sm leading-relaxed">
            <p>
              Aria Voss is a contemporary oil painter working from her studio in
              Vienna, Austria. Her practice centres on the transformative
              quality of light — how it defines form, creates mood, and elevates
              the ordinary into the extraordinary.
            </p>
            <p>
              Trained at the Vienna Academy of Fine Arts, Aria has exhibited
              widely across Europe and North America. Her work draws on the
              tradition of the Old Masters while embracing a distinctly modern
              sensibility — painterly, direct, and deeply felt.
            </p>
            <p>
              She works primarily in oils on canvas and linen, spending weeks on
              a single piece, building up layers of colour and glaze until the
              surface hums with the right quality of light.
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 border border-[#c9a84c]/10" />
          <div className="relative p-12 bg-[#181818] border border-[#2a2a2a]">
            <blockquote className="font-[family-name:var(--font-display)] text-2xl text-[#f5f0ea]/80 italic leading-relaxed">
              &ldquo;I don&apos;t paint things. I paint the light that falls on them —
              and what that light reveals.&rdquo;
            </blockquote>
            <cite className="block mt-6 text-xs tracking-[0.3em] uppercase text-[#c9a84c] not-italic">
              — Aria Voss
            </cite>
          </div>
          {/* Gold corner accents */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#c9a84c]/40" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#c9a84c]/40" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#c9a84c]/40" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#c9a84c]/40" />
        </div>
      </div>
    </section>
  );
}
