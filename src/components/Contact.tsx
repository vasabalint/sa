"use client";

import { useState, useRef } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Using Formspree – replace the URL with your own Formspree endpoint
      // Get one free at https://formspree.io/ → "New Form" → copy the endpoint URL
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-transparent border-b border-[#2a2a2a] px-0 py-3 text-sm text-[#e8e0d4] placeholder-transparent focus:outline-none focus:border-[#c9a84c] transition-colors duration-300";
  const labelBase =
    "absolute left-0 text-[#888888] transition-all duration-300 pointer-events-none";

  const getFloatClass = (field: string, hasValue?: boolean) =>
    focusedField === field || hasValue
      ? "top-[-18px] text-[10px] tracking-[0.25em] uppercase text-[#c9a84c]"
      : "top-3 text-sm";

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left column — info */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#f5f0ea] mb-6">
            Enquire About<br />a Painting
          </h2>
          <div className="w-12 h-px bg-[#c9a84c] mb-8" />

          <p className="text-[#888888] text-sm leading-relaxed mb-10 max-w-sm">
            If you&apos;re interested in a particular work, or would like to
            discuss a commission, please don&apos;t hesitate to reach out. I
            respond personally to every message.
          </p>

          {/* Contact details */}
          <div className="space-y-5">
            <a
              href="mailto:aria.voss@example.com"
              className="flex items-center gap-4 text-[#888888] hover:text-[#c9a84c] transition-colors duration-300 group"
            >
              <span className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a84c]/50 transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-sm">aria.voss@example.com</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-[#888888] hover:text-[#c9a84c] transition-colors duration-300 group"
            >
              <span className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a84c]/50 transition-colors duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
              <span className="text-sm">@ariavoss_art</span>
            </a>
          </div>
        </div>

        {/* Right column — form */}
        <div>
          {status === "success" ? (
            <div className="border border-[#c9a84c]/30 bg-[#c9a84c]/5 p-8 text-center">
              <div className="w-12 h-12 border border-[#c9a84c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[#f5f0ea] mb-2">
                Message Sent
              </h3>
              <p className="text-sm text-[#888888]">
                Thank you for reaching out. I&apos;ll be in touch shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-xs tracking-[0.2em] uppercase text-[#c9a84c] hover:text-[#e8c96a] transition-colors duration-200 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  required
                  className={inputBase}
                  placeholder="Your Name"
                  onFocus={() => setFocusedField("name")}
                  onBlur={(e) =>
                    setFocusedField(e.target.value ? "name-filled" : null)
                  }
                />
                <label
                  htmlFor="contact-name"
                  className={`${labelBase} ${getFloatClass("name")}`}
                >
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  required
                  className={inputBase}
                  placeholder="Email Address"
                  onFocus={() => setFocusedField("email")}
                  onBlur={(e) =>
                    setFocusedField(e.target.value ? "email-filled" : null)
                  }
                />
                <label
                  htmlFor="contact-email"
                  className={`${labelBase} ${getFloatClass("email")}`}
                >
                  Email Address
                </label>
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  className={inputBase}
                  placeholder="Subject (optional)"
                  onFocus={() => setFocusedField("subject")}
                  onBlur={(e) =>
                    setFocusedField(e.target.value ? "subject-filled" : null)
                  }
                />
                <label
                  htmlFor="contact-subject"
                  className={`${labelBase} ${getFloatClass("subject")}`}
                >
                  Subject (optional)
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  id="contact-message"
                  required
                  rows={4}
                  className={`${inputBase} resize-none`}
                  placeholder="Message"
                  onFocus={() => setFocusedField("message")}
                  onBlur={(e) =>
                    setFocusedField(e.target.value ? "message-filled" : null)
                  }
                />
                <label
                  htmlFor="contact-message"
                  className={`${labelBase} ${getFloatClass("message")}`}
                >
                  Message
                </label>
              </div>

              {/* Error state */}
              {status === "error" && (
                <p className="text-red-400 text-xs tracking-wide">
                  Something went wrong. Please try emailing directly at aria.voss@example.com
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={status === "loading"}
                className="group flex items-center gap-3 border border-[#c9a84c] text-[#c9a84c] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0e0e0e] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-[10px] text-[#888888]/50 leading-relaxed">
                This form is powered by Formspree. To activate it, replace{" "}
                <code className="text-[#c9a84c]/50">YOUR_FORM_ID</code> in{" "}
                <code className="text-[#c9a84c]/50">Contact.tsx</code> with
                your free Formspree endpoint.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
