import { useState, useEffect } from "react";

const links = ["hero", "about", "projects", "skills", "contact"];
const labels = { hero: "Home", about: "About", projects: "Projects", skills: "Skills", contact: "Contact" };

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#1a1a1a]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-mono text-sm text-[#00ff87] font-semibold tracking-widest hover:opacity-70 transition-opacity"
        >
          <span className="text-[#555]">{"<"}</span>
          madhab padhi
          <span className="text-[#555]">{"/>"}</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`font-mono text-xs tracking-widest uppercase transition-all duration-200 ${
                  activeSection === id
                    ? "text-[#00ff87]"
                    : "text-[#555] hover:text-[#e8e8e8]"
                }`}
              >
                {activeSection === id && (
                  <span className="text-[#00ff87] mr-1">{">"}</span>
                )}
                {labels[id]}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block px-4 py-1.5 font-mono text-xs tracking-widest border border-[#00ff87] text-[#00ff87] hover:bg-[#00ff87] hover:text-black transition-all duration-200"
        >
          RESUME
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#e8e8e8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#e8e8e8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#e8e8e8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] px-6 py-4 flex flex-col gap-4">
          {links.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left font-mono text-sm tracking-widest uppercase ${
                activeSection === id ? "text-[#00ff87]" : "text-[#555]"
              }`}
            >
              {activeSection === id && <span className="mr-2">{">"}</span>}
              {labels[id]}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest border border-[#00ff87] text-[#00ff87] px-4 py-2 text-center"
          >
            RESUME
          </a>
        </div>
      )}
    </header>
  );
}