import { useState } from "react";

const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? "https://portfolio-vt0d.onrender.com"
    : "http://localhost:5000");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try emailing me directly.");
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-[#00ff87] tracking-[0.3em] uppercase mb-3">
          04 / Contact
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-black text-[#e8e8e8] section-title mb-4">
          Let's Talk
        </h2>
        <p className="text-[#555] text-sm font-mono mb-14 max-w-md">
          Open to freelance projects, full-time roles, and interesting collabs.
          Drop a message and I'll get back within 24h.
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            {status === "success" ? (
              <div className="bg-[#0f0f0f] border border-[#00ff87]/30 p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#00ff87]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#00ff87] text-xl">OK</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#555] font-mono text-xs">
                  I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-mono text-xs text-[#00ff87] hover:underline"
                >
                  Send another -&gt;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] text-[#444] uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="input-field w-full px-4 py-3 text-sm text-[#e8e8e8] placeholder-[#333] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#444] uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="input-field w-full px-4 py-3 text-sm text-[#e8e8e8] placeholder-[#333] font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#444] uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Hey, I'd like to work with you on..."
                    className="input-field w-full px-4 py-3 text-sm text-[#e8e8e8] placeholder-[#333] font-mono resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="font-mono text-xs text-red-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full py-3 font-mono text-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 border border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message ->"
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="font-mono text-[10px] text-[#333] uppercase tracking-widest mb-3">
                Direct Email
              </p>
              <a
                href="mailto:you@email.com"
                className="font-mono text-sm text-[#00ff87] hover:opacity-70 transition-opacity"
              >
                madhab.padhi.23cse@bmu.edu.in
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] text-[#333] uppercase tracking-widest mb-3">
                Socials
              </p>
              <div className="space-y-2">
                {[
                  { label: "GitHub", href: "https://github.com/maxxmadhab" },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/madhab-padhi-1b7130335/",
                  },
                  {
                    label: "Twitter / X",
                    href: "https://twitter.com/yourusername",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono text-sm text-[#555] hover:text-[#e8e8e8] transition-colors"
                  >
                    <span className="text-[#00ff87] text-xs">-&gt;</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#0f0f0f] border border-[#1a1a1a]">
              <p className="font-mono text-[10px] text-[#00ff87] uppercase tracking-widest mb-2">
                Availability
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse-dot" />
                <span className="font-mono text-xs text-[#666]">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
