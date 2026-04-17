import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import ScrollProgress from "./scrollprogress";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
 
  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);
 
  return (
    <>
      {/*
        ── BACKGROUND IMAGE ──────────────────────────────────────────
        Put your PC setup photo in the /public folder and name it bg.jpg
        (e.g. /public/bg.jpg  →  Vite serves it as /bg.jpg automatically)
 
        To use a different file name or format:
          style={{ backgroundImage: "url('/your-photo.png')" }}
        ────────────────────────────────────────────────────────────── 
      */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.jpg')" }}
        aria-hidden="true"
      />
 
      {/* Dark overlay — tweak the rgba opacity values to control darkness */}
      <div
        className="fixed inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(8,8,8,0.94) 0%, rgba(8,8,8,0.80) 40%, rgba(8,8,8,0.92) 100%)",
        }}
        aria-hidden="true"
      />
 
      {/* Subtle film-grain noise layer */}
      <div className="noise-overlay" aria-hidden="true" />
 
      {/* All page content — sits above the background layers */}
      <div className="relative z-10 text-[#e8e8e8] min-h-screen font-sans overflow-x-hidden">
        <ScrollProgress />
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="text-center py-8 text-[#444] text-sm font-mono border-t border-white/5">
          <span className="text-[#00ff87]">{"<"}</span>
          {" built with React + Node "}
          <span className="text-[#00ff87]">{"/>"}</span>
          {" · © 2025 YourName"}
        </footer>
      </div>
    </>
  );
}
 
