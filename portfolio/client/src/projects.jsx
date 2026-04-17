import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "HireWise (Client)",
    tagline: "Full-stack hiring platform (user side).",
    problem:
      "Hiring workflows were fragmented with no unified platform for managing candidates and applications.",
    solution:
      "Built a scalable client-side platform with authentication, registration, and seamless interaction with backend APIs.",
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    live: "https://hirewise-maxx.vercel.app/register",
    github: "https://github.com/maxxmadhab",
    accent: "#00ff87",
  },
  {
    id: "02",
    title: "HireWise (Admin)",
    tagline: "Admin dashboard for data-driven hiring decisions.",
    problem:
      "Recruiters lacked a centralized system to manage and analyze candidate data efficiently.",
    solution:
      "Developed an admin dashboard with analytics, filtering, and real-time insights to streamline hiring workflows.",
    stack: ["React", "Next.js", "Node.js", "MongoDB"],
    live: "https://hirewise-maxx.vercel.app/admin/dashboard",
    github: "https://github.com/maxxmadhab",
    accent: "#00d4ff",
  },
  {
    id: "03",
    title: "SAR Image Colorization",
    tagline: "Deep learning for satellite image enhancement.",
    problem:
      "Grayscale SAR images lack interpretability for analysis.",
    solution:
      "Used CNN models to colorize SAR images and improve feature extraction using deep learning.",
    stack: ["Python", "CNN", "NumPy", "OpenCV"],
    live: "https://your-portfolio-link.vercel.app",
    github: "https://github.com/maxxmadhab",
    accent: "#ff6b2b",
  },
  {
    id: "04",
    title: "DDoS Detection System",
    tagline: "ML-based real-time anomaly detection.",
    problem:
      "Detecting DDoS attacks in real-time is complex due to high-volume traffic.",
    solution:
      "Built a Random Forest ML model with feature engineering to detect and classify network attacks.",
    stack: ["Python", "Machine Learning", "Scikit-learn"],
    live: "https://your-portfolio-link.vercel.app",
    github: "https://github.com/maxxmadhab",
    accent: "#a855f7",
  },
  {
    id: "05",
    title: "MaxxStudy",
    tagline: "Course review web application.",
    problem:
      "Students lacked a centralized platform to share course feedback.",
    solution:
      "Built a full-stack app for submitting and viewing reviews with validation and database integration.",
    stack: ["HTML", "CSS", "JavaScript", "MongoDB"],
    live: "https://your-portfolio-link.vercel.app",
    github: "https://github.com/maxxmadhab",
    accent: "#facc15",
  },
];

function ProjectCard({ project, index, visible }) {
  return (
    <div
      className={`project-card bg-[#0f0f0f] border border-[#1a1a1a] p-6 md:p-8 flex flex-col gap-5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: project.accent }}
          >
            {project.id}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-black text-[#e8e8e8] mt-1">
            {project.title}
          </h3>
          <p className="text-[#555] font-mono text-xs mt-1">{project.tagline}</p>
        </div>
        <div className="flex gap-3 shrink-0 mt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] text-[#444] hover:text-[#e8e8e8] transition-colors uppercase tracking-widest"
          >
            GitHub ↗
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest transition-colors"
            style={{ color: project.accent + "aa" }}
            onMouseEnter={(e) => (e.target.style.color = project.accent)}
            onMouseLeave={(e) => (e.target.style.color = project.accent + "aa")}
          >
            Live ↗
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#1a1a1a]" />

      {/* Problem / Solution */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <p className="font-mono text-[10px] text-[#333] uppercase tracking-widest mb-2">
            Problem
          </p>
          <p className="text-[#666] text-sm leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: project.accent + "77" }}>
            Solution
          </p>
          <p className="text-[#888] text-sm leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-[10px] font-mono border uppercase tracking-wider"
            style={{
              borderColor: project.accent + "30",
              color: project.accent + "bb",
              background: project.accent + "08",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-[#00ff87] tracking-[0.3em] uppercase mb-3">
          02 / Projects
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#e8e8e8] section-title">
            Things I've Built
          </h2>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-[#444] hover:text-[#00ff87] transition-colors uppercase tracking-widest whitespace-nowrap"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}