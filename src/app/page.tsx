"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

/* ─── SCROLL REVEAL HOOK ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.querySelectorAll(".reveal").forEach((c) => c.classList.add("visible")); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Section({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) {
  const ref = useReveal();
  return <section ref={ref} id={id} className={`py-24 px-6 ${className}`}>{children}</section>;
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="divider" />
      <Problem />
      <div className="divider" />
      <Architecture />
      <div className="divider" />
      <Scale />
      <div className="divider" />
      <Networks />
      <div className="divider" />
      <Products />
      <div className="divider" />
      <Numbers />
      <div className="divider" />
      <Timeline />
      <div className="divider" />
      <CTA />
      <Footer />
    </main>
  );
}

/* ─── NAV ─── */
function Nav() {
  const [s, setS] = useState(false);
  useEffect(() => { const h = () => setS(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${s ? "bg-[#050507]/80 backdrop-blur-xl border-b border-[var(--border)]" : ""}`}>
      <div className="max-w-[1024px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="url(#g1)" strokeWidth="1.5" /><circle cx="12" cy="12" r="4" fill="url(#g1)" /><defs><linearGradient id="g1" x1="2" y1="2" x2="22" y2="22"><stop stopColor="#9b8aff" /><stop offset="1" stopColor="#ff8a8a" /></linearGradient></defs></svg>
          <span className="text-[15px] font-medium text-white tracking-tight">Mind.new</span>
        </div>
        <div className="hidden md:flex items-center gap-7 text-[13px] text-[var(--muted)]">
          <a href="#research" className="hover:text-white transition">Research</a>
          <a href="#capabilities" className="hover:text-white transition">Capabilities</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
        </div>
        <a href="#contact" className="text-[13px] px-4 py-1.5 rounded-full border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/20 transition">Request Access</a>
      </div>
    </nav>
  );
}

/* ─── BRAIN GRAPHIC (Hero right side) ─── */
function BrainGraphic() {
  return (
    <div className="relative w-[380px] h-[380px] flex-shrink-0 hidden lg:flex items-center justify-center">
      {/* Outer rotating rings */}
      <svg className="absolute inset-0 rotate-slow" width="380" height="380" viewBox="0 0 380 380" fill="none">
        <circle cx="190" cy="190" r="180" stroke="url(#ring1)" strokeWidth="0.5" opacity="0.3" />
        <circle cx="190" cy="190" r="150" stroke="url(#ring1)" strokeWidth="0.5" opacity="0.2" />
        <defs><linearGradient id="ring1" x1="0" y1="0" x2="380" y2="380"><stop stopColor="#7c6aff" /><stop offset="1" stopColor="#ff6b6b" /></linearGradient></defs>
        {/* Dots on ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <circle key={deg} cx={190 + 180 * Math.cos((deg * Math.PI) / 180)} cy={190 + 180 * Math.sin((deg * Math.PI) / 180)} r="2" fill="#7c6aff" opacity="0.5" />
        ))}
      </svg>

      {/* Inner counter-rotating ring */}
      <svg className="absolute inset-0 rotate-reverse" width="380" height="380" viewBox="0 0 380 380" fill="none">
        <circle cx="190" cy="190" r="120" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <circle key={deg} cx={190 + 120 * Math.cos((deg * Math.PI) / 180)} cy={190 + 120 * Math.sin((deg * Math.PI) / 180)} r="1.5" fill="#ff6b6b" opacity="0.6" />
        ))}
      </svg>

      {/* Flow lines */}
      <svg className="absolute inset-0" width="380" height="380" viewBox="0 0 380 380" fill="none">
        <path d="M190 10 Q300 100 190 190" stroke="url(#flow1)" strokeWidth="1" className="flow-line" opacity="0.4" />
        <path d="M370 190 Q280 280 190 190" stroke="url(#flow1)" strokeWidth="1" className="flow-line flow-line-2" opacity="0.4" />
        <path d="M190 370 Q100 280 190 190" stroke="url(#flow1)" strokeWidth="1" className="flow-line flow-line-3" opacity="0.4" />
        <defs><linearGradient id="flow1"><stop stopColor="#7c6aff" /><stop offset="1" stopColor="transparent" /></linearGradient></defs>
      </svg>

      {/* Center brain blob */}
      <div className="relative">
        <div className="absolute -inset-16 rounded-full bg-gradient-to-br from-[#7c6aff] to-[#ff6b6b] opacity-[0.08] blur-[60px] pulse-glow" />
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="float">
          {/* Stylized brain shape */}
          <ellipse cx="60" cy="55" rx="40" ry="45" stroke="url(#brain1)" strokeWidth="1" fill="url(#brain1)" fillOpacity="0.05" />
          <path d="M60 10 C45 10 30 25 30 45 C30 55 35 65 40 70 C35 75 32 82 35 90 C38 98 48 100 55 98" stroke="url(#brain1)" strokeWidth="0.8" opacity="0.6" />
          <path d="M60 10 C75 10 90 25 90 45 C90 55 85 65 80 70 C85 75 88 82 85 90 C82 98 72 100 65 98" stroke="url(#brain1)" strokeWidth="0.8" opacity="0.6" />
          <line x1="60" y1="10" x2="60" y2="98" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
          {/* Activity hotspots */}
          <circle cx="45" cy="40" r="6" fill="#7c6aff" opacity="0.3" className="pulse-glow" />
          <circle cx="75" cy="40" r="8" fill="#ff6b6b" opacity="0.3" className="pulse-glow" style={{ animationDelay: "1s" }} />
          <circle cx="50" cy="60" r="5" fill="#ffb86c" opacity="0.3" className="pulse-glow" style={{ animationDelay: "2s" }} />
          <circle cx="70" cy="55" r="7" fill="#7c6aff" opacity="0.25" className="pulse-glow" style={{ animationDelay: "0.5s" }} />
          <circle cx="60" cy="75" r="4" fill="#ff6b6b" opacity="0.3" className="pulse-glow" style={{ animationDelay: "1.5s" }} />
          <defs><linearGradient id="brain1" x1="20" y1="10" x2="100" y2="100"><stop stopColor="#9b8aff" /><stop offset="1" stopColor="#ff8a8a" /></linearGradient></defs>
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute top-8 right-8 text-right float-delay">
        <div className="text-[10px] text-[var(--accent)] font-medium">Visual Cortex</div>
        <div className="text-[9px] text-[var(--muted)]">55% divergence</div>
      </div>
      <div className="absolute bottom-16 left-4 float-delay-2">
        <div className="text-[10px] text-[var(--accent2)] font-medium">Social Network</div>
        <div className="text-[9px] text-[var(--muted)]">91% divergence</div>
      </div>
      <div className="absolute top-1/3 left-2 float">
        <div className="text-[10px] text-[#ffb86c] font-medium">Auditory</div>
        <div className="text-[9px] text-[var(--muted)]">72% divergence</div>
      </div>
    </div>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#7c6aff] opacity-[0.04] blur-[120px] top-0 left-1/3 pointer-events-none" />

      <div className="relative max-w-[1024px] mx-auto flex items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase">Research Preview</span>
          </div>

          <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.03em] font-medium">
            An AI Model of the{" "}
            <span className="gradient-text">Neurodiverse Brain</span>
          </h1>

          <p className="text-[16px] text-[var(--muted)] mt-5 max-w-md leading-relaxed font-light">
            Predicting neural responses to sight, sound, and language.
            Mapping how 20,484 cortical points respond differently in autistic minds.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <a href="#research" className="text-[13px] px-6 py-2.5 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition">
              Explore the Research
            </a>
            <a href="#contact" className="text-[13px] px-6 py-2.5 rounded-full border border-white/10 text-[var(--text)] hover:border-white/20 transition">
              Request API Access
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 pt-6 border-t border-[var(--border)]">
            {[["933", "brain scans"], ["20,484", "vertices"], ["820", "connections"], ["20", "sites"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-[20px] font-medium text-white tabular-nums">{n}</div>
                <div className="text-[11px] text-[var(--muted)] mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Brain graphic */}
        <BrainGraphic />
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function Problem() {
  return (
    <Section id="research">
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="reveal text-[28px] leading-tight tracking-tight">
            Understanding Neurodiversity at Scale
          </h2>
          <div className="reveal reveal-delay-1 space-y-4 text-[15px] text-[var(--muted)] leading-relaxed font-light mt-6">
            <p>
              Understanding how autistic brains process the world has required
              individual brain scans -- expensive, slow, and impossible for many.
            </p>
            <p className="text-[var(--text)]">
              Mind.new is a foundation model that predicts how any neurodiverse
              brain responds to any stimulus. Months of lab work in seconds.
            </p>
          </div>
        </div>

        {/* Animated comparison graphic */}
        <div className="reveal reveal-delay-2 card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] text-[var(--accent)] font-medium">Neurotypical</span>
            <span className="text-[11px] text-[var(--muted)]">vs</span>
            <span className="text-[11px] text-[var(--accent2)] font-medium">Neurodiverse</span>
          </div>
          <div className="flex gap-4">
            {/* NT brain */}
            <div className="flex-1 h-32 rounded-lg bg-gradient-to-br from-[var(--accent)]/5 to-transparent border border-[var(--accent)]/10 flex items-center justify-center relative overflow-hidden">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <ellipse cx="30" cy="28" rx="20" ry="22" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
                <circle cx="25" cy="22" r="4" fill="var(--accent)" opacity="0.15" />
                <circle cx="35" cy="25" r="5" fill="var(--accent)" opacity="0.2" />
                <circle cx="30" cy="35" r="3" fill="var(--accent)" opacity="0.1" />
              </svg>
              <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-[var(--muted)]">Baseline response</div>
            </div>
            {/* ND brain */}
            <div className="flex-1 h-32 rounded-lg bg-gradient-to-br from-[var(--accent2)]/5 to-transparent border border-[var(--accent2)]/10 flex items-center justify-center relative overflow-hidden">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <ellipse cx="30" cy="28" rx="20" ry="22" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
                <circle cx="22" cy="20" r="7" fill="var(--accent2)" opacity="0.25" className="pulse-glow" />
                <circle cx="38" cy="22" r="9" fill="#ffb86c" opacity="0.2" className="pulse-glow" style={{ animationDelay: "1s" }} />
                <circle cx="28" cy="38" r="5" fill="var(--accent2)" opacity="0.15" className="pulse-glow" style={{ animationDelay: "0.5s" }} />
              </svg>
              <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-[var(--muted)]">Altered activation</div>
            </div>
          </div>
          <div className="mt-4 text-[11px] text-[var(--muted)] text-center font-light">
            Same stimulus, different neural response patterns
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── ARCHITECTURE ─── */
function Architecture() {
  return (
    <Section>
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[28px] leading-tight tracking-tight mb-3">Three-Stage Architecture</h2>
        <p className="reveal reveal-delay-1 text-[15px] text-[var(--muted)] mb-12 max-w-lg font-light">
          A proprietary multi-modal pipeline for predicting neurodiverse brain activity.
        </p>

        {/* Pipeline visual */}
        <div className="reveal reveal-delay-2 card p-8 relative overflow-hidden">
          {/* Animated background line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

          <div className="relative flex items-center justify-between gap-4">
            {/* Inputs */}
            <div className="flex flex-col gap-2">
              {[
                { m: "Video", icon: <><rect x="4" y="4" width="16" height="12" rx="2" /><polygon points="10,8 10,12 14,10" /></> },
                { m: "Audio", icon: <><path d="M12 3v18" /><path d="M8 8v8" /><path d="M16 6v12" /><path d="M4 11v2" /><path d="M20 10v4" /></> },
                { m: "Text", icon: <><path d="M4 7h16M4 12h10M4 17h14" /></> },
              ].map(({ m, icon }) => (
                <div key={m} className="flex items-center gap-2">
                  <div className="w-[80px] h-10 rounded-lg border border-[var(--border)] bg-white/[0.02] flex items-center gap-2 px-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    <span className="text-[11px] text-[var(--muted)]">{m}</span>
                  </div>
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none"><path d="M0 4h18M15 1l3 3-3 3" stroke="#3f3f46" strokeWidth="0.8" /></svg>
                </div>
              ))}
            </div>

            {/* Encoder */}
            <div className="w-[90px] h-[110px] rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/[0.03] flex flex-col items-center justify-center gap-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.7">
                <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span className="text-[10px] text-[var(--accent)] font-medium">Encoders</span>
            </div>

            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="hidden md:block"><path d="M0 4h18M15 1l3 3-3 3" stroke="#3f3f46" strokeWidth="0.8" /></svg>

            {/* Transformer */}
            <div className="w-[90px] h-[110px] rounded-xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1" opacity="0.7">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              <span className="text-[10px] text-[var(--muted)] font-medium">Transformer</span>
            </div>

            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="hidden md:block"><path d="M0 4h18M15 1l3 3-3 3" stroke="#3f3f46" strokeWidth="0.8" /></svg>

            {/* ND Mapper */}
            <div className="w-[90px] h-[110px] rounded-xl border border-[var(--accent2)]/15 bg-[var(--accent2)]/[0.03] flex flex-col items-center justify-center gap-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth="1" opacity="0.7">
                <circle cx="12" cy="12" r="9" /><path d="M12 3c-3 5-3 9 0 9s3 4 0 9" /><path d="M3 12c5-3 9-3 9 0s4 3 9 0" />
              </svg>
              <span className="text-[10px] text-[var(--accent2)] font-medium">ND Mapper</span>
            </div>

            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="hidden md:block"><path d="M0 4h18M15 1l3 3-3 3" stroke="#3f3f46" strokeWidth="0.8" /></svg>

            {/* Output */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent2)]/10 border border-white/10 flex items-center justify-center pulse-glow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="1.2">
                <circle cx="12" cy="12" r="9" /><path d="M8 12c0-2 1.8-4 4-4s4 2 4 4-1.8 4-4 4-4-2-4-4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            ["Multi-Modal Encoding", "Specialized encoders process sight, sound, and language independently."],
            ["Universal Integration", "A deep transformer fuses modalities into unified brain-aligned representations."],
            ["Neurodiverse Mapping", "Transforms neurotypical predictions to neurodiverse patterns from real brain data."],
          ].map(([t, d], i) => (
            <div key={t} className={`reveal reveal-delay-${i + 2} card p-5`}>
              <div className="text-[11px] text-[var(--accent)] font-medium mb-2">0{i + 1}</div>
              <h3 className="text-[14px] font-medium mb-2">{t}</h3>
              <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── SCALE ─── */
function Scale() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const bars = [
    { n: "50", h: 12 }, { n: "100", h: 20 }, { n: "200", h: 30 }, { n: "400", h: 40 },
    { n: "933", h: 52, c: true }, { n: "10K", h: 65, f: true }, { n: "100K", h: 80, f: true }, { n: "400K", h: 95, f: true },
  ];

  return (
    <Section>
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[28px] leading-tight tracking-tight mb-3">Scaling Laws</h2>
        <p className="reveal reveal-delay-1 text-[15px] text-[var(--muted)] mb-10 max-w-lg font-light">
          Prediction accuracy increases log-linearly with more data. No plateau reached.
        </p>

        <div ref={ref} className="reveal reveal-delay-2 card p-8">
          <div className="flex items-end gap-2 h-48">
            {bars.map((b, i) => (
              <div key={b.n} className="flex-1 flex flex-col items-center justify-end h-full">
                <div
                  className="w-full rounded-sm"
                  style={{
                    height: vis ? `${b.h}%` : "0%",
                    transition: `height 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
                    background: b.c
                      ? "linear-gradient(to top, #7c6aff, #ff6b6b)"
                      : b.f
                        ? "rgba(124, 106, 255, 0.1)"
                        : "rgba(124, 106, 255, 0.4)",
                    borderTop: b.f ? "1px dashed rgba(124, 106, 255, 0.25)" : "none",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            {bars.map((b) => (
              <div key={b.n} className={`flex-1 text-center text-[10px] ${b.c ? "text-white font-medium" : "text-[var(--muted)]"}`}>{b.n}</div>
            ))}
          </div>
          <div className="text-center text-[10px] text-[var(--muted)] mt-3">Subjects in Training</div>
        </div>
      </div>
    </Section>
  );
}

/* ─── NETWORKS ─── */
function Networks() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const nets = [
    { name: "Visual", pct: 55, icon: <circle cx="12" cy="12" r="3" /> },
    { name: "Auditory", pct: 72, icon: <><path d="M12 3v18M8 8v8M16 6v12M4 11v2M20 10v4" /></> },
    { name: "Social", pct: 91, icon: <><circle cx="9" cy="8" r="2.5" /><circle cx="15" cy="8" r="2.5" /><path d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1" /></> },
    { name: "Default Mode", pct: 48, icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l2 2" /></> },
    { name: "Salience", pct: 63, icon: <path d="M12 2l3 6.3L22 9.3l-5 4.9L18.2 22 12 18.3 5.8 22 7 14.1l-5-4.9 6.9-1z" /> },
    { name: "Motor", pct: 85, icon: <><path d="M18 8a6 6 0 01-6 6M6 16a6 6 0 016-6" /><circle cx="12" cy="12" r="2" /></> },
  ];

  return (
    <Section id="capabilities">
      <div ref={ref} className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[28px] leading-tight tracking-tight mb-3">Six Neural Networks Mapped</h2>
        <p className="reveal reveal-delay-1 text-[15px] text-[var(--muted)] mb-10 max-w-lg font-light">
          How sensory processing differs across the brain&apos;s key functional networks.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {nets.map((net, i) => (
            <div key={net.name} className={`reveal reveal-delay-${Math.min(i + 1, 5)} card p-5`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-50">{net.icon}</svg>
              <h3 className="text-[13px] font-medium mb-3">{net.name}</h3>
              <div className="w-full h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" style={{ width: vis ? `${net.pct}%` : "0%", transition: `width 1.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s` }} />
              </div>
              <div className="text-[10px] text-[var(--muted)] mt-1.5">{net.pct}% divergence</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── PRODUCTS ─── */
function Products() {
  return (
    <Section id="products">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[28px] leading-tight tracking-tight mb-3">Built on Mind.new</h2>
        <p className="reveal reveal-delay-1 text-[15px] text-[var(--muted)] mb-10 max-w-lg font-light">Practical tools powered by the foundation model.</p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Sensory Audit", desc: "Upload video of any space. Get second-by-second sensory analysis, accessibility score, and recommendations.", tag: "Live", live: true },
            { name: "Brain Comparison", desc: "Side-by-side neurotypical vs neurodiverse brain activation for any stimulus.", tag: "Live", live: true },
            { name: "Sensory Passport", desc: "Personalized sensory profile through 5-minute calibration. Portable for schools and clinics.", tag: "Coming Soon", live: false },
            { name: "Neurotrack", desc: "Therapy progress tracking with dashboards, milestones, and sensory-linked reporting.", tag: "In Development", live: false },
          ].map((p, i) => (
            <div key={p.name} className={`reveal reveal-delay-${Math.min(i + 1, 4)} card p-6`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[14px] font-medium">{p.name}</h3>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full ${p.live ? "bg-[var(--accent)]/10 text-[var(--accent)]" : "bg-white/5 text-[var(--muted)]"}`}>{p.tag}</span>
              </div>
              <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── NUMBERS ─── */
function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.5 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-[1024px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {[["933", "Brain recordings"], ["820", "Neural connections"], ["20,484", "Cortical points"], ["6", "Networks profiled"]].map(([n, l], i) => (
          <div key={l} className={`transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="text-[32px] font-medium text-white tabular-nums tracking-tight">{n}</div>
            <div className="text-[11px] text-[var(--muted)] mt-1 font-light">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── TIMELINE ─── */
function Timeline() {
  return (
    <Section id="roadmap">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[28px] leading-tight tracking-tight mb-12">Roadmap</h2>
        {[
          { v: "v0.1", n: "Seed", d: "Foundation model. Statistical brain transform. Live API.", c: true },
          { v: "v0.5", n: "Sprout", d: "GPU fine-tuning. Sensory subtypes. Video input. Age-specific models.", c: false },
          { v: "v1.0", n: "Bloom", d: "Validated. 10K+ subjects. Sensory Passport. Published metrics.", c: false },
          { v: "v2.0", n: "Canopy", d: "Real-time. EEG. Wearables. 100K+ subjects.", c: false },
          { v: "v3.0", n: "Forest", d: "All neurodiversity. ADHD, SPD, anxiety. 400K+ subjects.", c: false },
        ].map((item, i) => (
          <div key={item.v} className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex gap-5`}>
            <div className="flex flex-col items-center">
              <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${item.c ? "bg-[var(--accent)]" : "bg-white/10"}`} />
              {i < 4 && <div className="w-px flex-1 bg-[var(--border)]" />}
            </div>
            <div className="pb-8">
              <div className="flex items-center gap-2.5 mb-1">
                <span className={`text-[17px] font-medium ${item.c ? "gradient-text" : "text-[var(--muted)]"}`}>{item.v}</span>
                <span className="text-[11px] text-[var(--muted)]">{item.n}</span>
                {item.c && <span className="text-[9px] px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">Current</span>}
              </div>
              <p className="text-[12px] text-[var(--muted)] font-light">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <Section id="contact">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[28px] leading-tight tracking-tight mb-3">
          Build with <span className="gradient-text">Mind.new</span>
        </h2>
        <p className="reveal reveal-delay-1 text-[15px] text-[var(--muted)] mb-8 max-w-md font-light">
          API access for researchers, clinics, schools, and companies building accessible products.
        </p>
        <div className="reveal reveal-delay-2 flex gap-3">
          <a href="mailto:ibrahimshaheer75@gmail.com?subject=Mind.new%20API%20Access" className="text-[13px] px-6 py-2.5 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition">Request Access</a>
          <a href="https://leezadeck.my.canva.site/" className="text-[13px] px-6 py-2.5 rounded-full border border-white/10 text-[var(--text)] hover:border-white/20 transition">About Leeza Care</a>
        </div>
      </div>
    </Section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6 px-6">
      <div className="max-w-[1024px] mx-auto flex items-center justify-between text-[11px] text-[var(--muted)]">
        <span>Mind.new by Leeza Care Research &amp; Development Foundation</span>
        <div className="flex gap-5">
          <a href="https://leezadeck.my.canva.site/" className="hover:text-white transition">About</a>
          <a href="mailto:ibrahimshaheer75@gmail.com" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
