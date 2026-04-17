import { useEffect, useRef, useState } from "react";

const stack = [
  "React", "Node.js", "Express", "Tailwind CSS",
  "PostgreSQL", "Supabase", "Git", "REST APIs",
  "JavaScript", "TypeScript", "DSA", "Vercel",
];

const focuses = [
  { icon: "⚡", label: "Full Stack Dev", desc: "End-to-end web applications" },
  { icon: "🧠", label: "DSA / Algo", desc: "LeetCode grind, daily problems" },
  { icon: "🤖", label: "ML / AI", desc: "Creating models & pipelines" },
];

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
  <section id="about" ref={ref} className="py-28 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Section label */}
    <p className="font-mono text-xs text-[#00ff87] tracking-[0.3em] uppercase mb-3">
      01 / About
    </p>
    <h2 className="font-display text-4xl md:text-5xl font-black text-[#e8e8e8] section-title mb-16">
      Who I Am
    </h2>

    <div className="grid md:grid-cols-2 gap-16 items-start">
      {/* Left: bio + focus */}
      <div
        className={`transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <div className="space-y-4 text-[#888] leading-relaxed text-[15px]">

          <p>
            Hey, I'm{" "}
            <span className="text-[#e8e8e8] font-medium">
              Madhab Padhi
            </span>{" "}
            — a Computer Science undergraduate with strong foundations in{" "}
            <span className="text-[#00ff87]">
              DSA, OOP, and software development
            </span>
            , focused on building scalable and reliable systems.
          </p>

          <p>
            I build{" "}
            <span className="text-[#e8e8e8]">
              full-stack applications
            </span>{" "}
            with clean architecture — from designing REST APIs and authentication
            systems to managing database-driven applications and deploying
            production-ready solutions.
          </p>

          <p>
            Alongside development, I work extensively with{" "}
            <span className="text-[#00ff87]">
              Machine Learning, Deep Learning, and data-driven systems
            </span>
            , building models for computer vision, security, and anomaly detection,
            and integrating them into real-world applications.
          </p>

        </div>

        {/* Current Focus */}
        <div className="mt-10 space-y-3">
          <p className="font-mono text-xs text-[#444] uppercase tracking-widest mb-4">
            Current Focus
          </p>
          {focuses.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#00ff87]/20 transition-colors duration-300"
            >
              <span className="text-xl">{f.icon}</span>
              <div>
                <p className="font-display font-semibold text-[#e8e8e8] text-sm">
                  {f.label}
                </p>
                <p className="text-[#555] text-xs font-mono mt-0.5">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: tech stack */}
      <div
        className={`transition-all duration-700 delay-200 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <p className="font-mono text-xs text-[#444] uppercase tracking-widest mb-6">
          Tech I work with
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-[#0f0f0f] border border-[#1a1a1a] font-mono text-xs text-[#888] hover:text-[#00ff87] hover:border-[#00ff87]/30 transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { val: "15+", label: "Projects Built" },
            { val: "300+", label: "LeetCode Solved" },
            { val: "2y", label: "Experience" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-4 bg-[#0f0f0f] border border-[#1a1a1a] text-center"
            >
              <p className="font-display text-2xl font-black text-[#00ff87]">
                {s.val}
              </p>
              <p className="font-mono text-[10px] text-[#444] mt-1 uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Terminal block */}
        <div className="mt-8 bg-[#0a0a0a] border border-[#1a1a1a] p-4">
          <div className="flex gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <pre className="font-mono text-xs text-[#555] leading-relaxed">
            <span className="text-[#00ff87]">$</span>{" "}
            <span className="text-[#00d4ff]">whoami</span>{"\n"}
            <span className="text-[#888]">
              {"→ full-stack developer | ML & AI enthusiast"}
            </span>{"\n\n"}

            <span className="text-[#00ff87]">$</span>{" "}
            <span className="text-[#00d4ff]">cat skills.txt</span>{"\n"}
            <span className="text-[#888]">
              {"→ react, node, databases, ml, dl, system design"}
            </span>{"\n\n"}

            <span className="text-[#00ff87]">$</span>{" "}
            <span className="text-[#888] animate-blink">█</span>
          </pre>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}