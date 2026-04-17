import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend",
    icon: "◈",
    color: "#00ff87",
    skills: [
      { name: "React / JSX", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    category: "Backend",
    icon: "◆",
    color: "#00d4ff",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST API Design", level: 88 },
      { name: "Auth / JWT", level: 78 },
    ],
  },
  {
    category: "Database",
    icon: "◉",
    color: "#ff6b2b",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "Supabase", level: 80 },
      { name: "MongoDB", level: 65 },
      { name: "SQL Queries", level: 78 },
    ],
  },
  {
    category: "Tools & Misc",
    icon: "◇",
    color: "#a855f7",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "DSA / Algorithms", level: 75 },
      { name: "Vercel / Render", level: 82 },
      { name: "Figma Basics", level: 60 },
    ],
  },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-xs text-[#888]">{name}</span>
        <span className="font-mono text-[10px]" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-[3px] bg-[#1a1a1a] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}44`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-[#00ff87] tracking-[0.3em] uppercase mb-3">
          03 / Skills
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-black text-[#e8e8e8] section-title mb-16">
          My Toolkit
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`bg-[#0f0f0f] border border-[#1a1a1a] p-6 hover:border-[${group.color}]/20 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${gi * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg" style={{ color: group.color }}>
                  {group.icon}
                </span>
                <h3 className="font-display font-bold text-[#e8e8e8] text-sm uppercase tracking-wider">
                  {group.category}
                </h3>
              </div>

              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  animate={visible}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Extra tools row */}
        <div className="mt-10 p-6 bg-[#0f0f0f] border border-[#1a1a1a]">
          <p className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-4">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Python", "C++", "Postman", "Docker (basics)", "Linux",
              "Socket.io", "D3.js", "Framer Motion", "Prisma", "Redis (basics)"
            ].map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-[#444] hover:text-[#888] transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}