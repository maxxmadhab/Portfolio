import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "ML Enthusiast",
  "DSA Problem Solver",
  
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center dot-grid overflow-hidden"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,135,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-6 w-16 h-16 border-t border-l border-[#00ff87]/20" />
      <div className="absolute bottom-16 right-6 w-16 h-16 border-b border-r border-[#00ff87]/20" />

      {/* Floating badges */}
      <div
        className="absolute top-1/4 right-8 md:right-16 animate-float hidden md:flex flex-col items-center gap-1 opacity-30"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#00ff87]" />
        <span className="font-mono text-[10px] text-[#00ff87] writing-mode-vertical tracking-widest rotate-90 mt-2 whitespace-nowrap">
          scroll down
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse-dot" />
            <span className="font-mono text-xs text-[#00ff87] tracking-widest uppercase">
              Available for work
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight mb-4">
            <span className="block text-[#e8e8e8]">Madhab</span>
            <span
              className="block text-[#00ff87] glow-text"
              style={{ letterSpacing: "-2px" }}
            >
              padhi
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="flex items-center gap-2 mt-6 mb-4 h-8">
            <span className="text-[#555] font-mono text-sm mr-1">{"_"}</span>
            <span className="font-mono text-lg md:text-xl text-[#00d4ff] font-medium">
              {displayed}
            </span>
            <span className="w-0.5 h-5 bg-[#00d4ff] animate-blink" />
          </div>

          {/* Value statement */}
         <p className="text-[#888] text-base md:text-lg max-w-xl mt-4 leading-relaxed font-sans">
  Full-stack developer with deep expertise in <span className="text-[#e8e8e8]">machine learning, generative AI, and data science</span>, 
  building end-to-end systems from model development to scalable deployment.
</p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary px-6 py-3 font-mono text-sm tracking-widest uppercase"
            >
              View Projects →
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-outline px-6 py-3 font-mono text-sm tracking-widest uppercase text-[#888]"
            >
              Get In Touch
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-[#444] hover:text-[#00ff87] transition-colors tracking-widest uppercase"
            >
              GitHub
            </a>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-[#444] hover:text-[#00ff87] transition-colors tracking-widest uppercase"
            >
              LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-[#444] hover:text-[#00ff87] transition-colors tracking-widest uppercase"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}