"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Divider />
      <Problem />
      <Divider />
      <Architecture />
      <Divider />
      <Scale />
      <Divider />
      <Networks />
      <Divider />
      <Products />
      <Divider />
      <Numbers />
      <Divider />
      <Timeline />
      <Divider />
      <CTA />
      <Footer />
    </main>
  );
}

function Divider() {
  return <div className="divider" />;
}

/* ─── NAV ─── */
function Nav() {
  const [s, setS] = useState(false);
  useEffect(() => {
    const h = () => setS(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${s ? "bg-[#050507]/80 backdrop-blur-xl border-b border-[var(--border)]" : ""}`}>
      <div className="max-w-[1024px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="url(#g1)" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="4" fill="url(#g1)" />
            <defs><linearGradient id="g1" x1="2" y1="2" x2="22" y2="22"><stop stopColor="#9b8aff" /><stop offset="1" stopColor="#ff8a8a" /></linearGradient></defs>
          </svg>
          <span className="text-[15px] font-medium text-white tracking-tight">Mind.new</span>
        </div>
        <div className="hidden md:flex items-center gap-7 text-[13px] text-[var(--muted)]">
          <a href="#research" className="hover:text-white transition">Research</a>
          <a href="#capabilities" className="hover:text-white transition">Capabilities</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
        </div>
        <a href="#contact" className="text-[13px] px-4 py-1.5 rounded-full border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/20 transition">
          Request Access
        </a>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden">
      <div className="hero-glow w-[500px] h-[500px] bg-[#7c6aff] opacity-[0.07] top-0 left-1/2 -translate-x-1/2" />

      <div className="relative max-w-[1024px] mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span className="text-[12px] text-[var(--muted)] tracking-wide uppercase">Research Preview</span>
        </div>

        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] font-medium max-w-3xl">
          An AI Model of the{" "}
          <span className="gradient-text">Neurodiverse Brain</span>
        </h1>

        <p className="text-[17px] text-[var(--muted)] mt-6 max-w-xl leading-relaxed font-light">
          Predicting neural responses to sight, sound, and language.
          Mapping how 20,484 points on the brain surface respond differently
          in autistic minds.
        </p>

        <div className="flex items-center gap-4 mt-10">
          <a href="#research" className="text-[13px] px-6 py-2.5 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition">
            Explore the Research
          </a>
          <a href="#contact" className="text-[13px] px-6 py-2.5 rounded-full border border-white/10 text-[var(--text)] hover:border-white/20 transition">
            Request API Access
          </a>
        </div>

        {/* Stats row */}
        <div className="flex gap-12 mt-16 pt-8 border-t border-[var(--border)]">
          {[
            ["933", "brain scans"],
            ["20,484", "vertices mapped"],
            ["820", "significant connections"],
            ["20", "research sites"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-[22px] font-medium text-white tabular-nums">{n}</div>
              <div className="text-[12px] text-[var(--muted)] mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function Problem() {
  return (
    <section className="py-24 px-6" id="research">
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-[32px] leading-tight tracking-tight">
            The Challenge of Understanding the Neurodiverse Brain
          </h2>
        </div>
        <div className="space-y-5 text-[15px] text-[var(--muted)] leading-relaxed font-light">
          <p>
            For decades, understanding how autistic brains process the world required
            individual brain scans -- each costing thousands, taking hours, and impossible
            for many who can&apos;t tolerate MRI environments.
          </p>
          <p className="text-[var(--text)]">
            Mind.new changes this. A foundation model that predicts how any neurodiverse
            brain responds to any stimulus -- without scanning anyone. Transforming months
            of neuroscience lab work into seconds of computation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── ARCHITECTURE ─── */
function Architecture() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-[32px] leading-tight tracking-tight mb-4">
          A Three-Stage Architecture
        </h2>
        <p className="text-[15px] text-[var(--muted)] mb-14 max-w-lg font-light">
          Mind.new predicts brain activity through a proprietary multi-modal pipeline.
        </p>

        {/* Pipeline */}
        <div className="card p-8">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Inputs */}
            <div className="flex flex-col gap-2">
              {["Video", "Audio", "Text"].map((m) => (
                <div key={m} className="flex items-center gap-3">
                  <div className="w-[72px] h-9 rounded-md border border-[var(--border)] flex items-center justify-center text-[12px] text-[var(--muted)]">{m}</div>
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M0 4h14M11 1l3 3-3 3" stroke="#3f3f46" strokeWidth="1" /></svg>
                  <div className="w-[80px] h-9 rounded-md bg-white/[0.03] border border-[var(--border)] flex items-center justify-center text-[11px] text-[var(--accent)] font-medium">Encoder</div>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <svg width="24" height="8" viewBox="0 0 16 8" fill="none" className="mx-2 hidden md:block"><path d="M0 4h14M11 1l3 3-3 3" stroke="#3f3f46" strokeWidth="1" /></svg>

            {/* Transformer */}
            <div className="w-[120px] h-[120px] rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/[0.04] flex flex-col items-center justify-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" /></svg>
              <span className="text-[11px] font-medium text-[var(--accent)]">Transformer</span>
            </div>

            <svg width="24" height="8" viewBox="0 0 16 8" fill="none" className="mx-2 hidden md:block"><path d="M0 4h14M11 1l3 3-3 3" stroke="#3f3f46" strokeWidth="1" /></svg>

            {/* ND Mapper */}
            <div className="w-[120px] h-[120px] rounded-xl border border-[var(--accent2)]/15 bg-[var(--accent2)]/[0.04] flex flex-col items-center justify-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 3c-2 4-2 8 0 9s2 5 0 9" /><path d="M3 12c4-2 8-2 9 0s5 2 9 0" /></svg>
              <span className="text-[11px] font-medium text-[var(--accent2)]">ND Brain Map</span>
            </div>

            <svg width="24" height="8" viewBox="0 0 16 8" fill="none" className="mx-2 hidden md:block"><path d="M0 4h14M11 1l3 3-3 3" stroke="#3f3f46" strokeWidth="1" /></svg>

            {/* Output */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent2)]/20 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M8 12s1.5-3 4-3 4 3 4 3-1.5 3-4 3-4-3-4-3z" /></svg>
              </div>
              <span className="text-[10px] text-[var(--muted)]">Brain Activity</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            ["Multi-Modal Encoding", "Specialized encoders process sight, sound, and language independently, preserving channel-specific sensory information."],
            ["Universal Integration", "A deep transformer fuses all modalities into unified representations -- learning how the brain integrates multi-sensory input."],
            ["Neurodiverse Mapping", "A trained mapping layer transforms neurotypical predictions to neurodiverse patterns, based on hundreds of real brain recordings."],
          ].map(([t, d], i) => (
            <div key={t} className="card p-5">
              <div className="text-[11px] text-[var(--accent)] font-medium mb-2">0{i + 1}</div>
              <h3 className="text-[14px] font-medium mb-2">{t}</h3>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed font-light">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    { n: "50", h: 12, c: false },
    { n: "100", h: 20, c: false },
    { n: "200", h: 30, c: false },
    { n: "400", h: 40, c: false },
    { n: "933", h: 52, c: true },
    { n: "10K", h: 65, c: false, f: true },
    { n: "100K", h: 80, c: false, f: true },
    { n: "400K", h: 95, c: false, f: true },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-[32px] leading-tight tracking-tight mb-4">Scaling Laws</h2>
        <p className="text-[15px] text-[var(--muted)] mb-12 max-w-lg font-light">
          Prediction accuracy increases log-linearly with more brain data.
          Performance has not plateaued.
        </p>

        <div ref={ref} className="card p-8">
          <div className="flex items-end gap-[6px] h-52">
            {bars.map((b) => (
              <div key={b.n} className="flex-1 flex flex-col items-center justify-end h-full">
                <div
                  className="w-full rounded-sm transition-all duration-[1.2s] ease-out"
                  style={{
                    height: vis ? `${b.h}%` : "0%",
                    background: b.c
                      ? "linear-gradient(to top, #7c6aff, #ff6b6b)"
                      : b.f
                        ? "rgba(124, 106, 255, 0.12)"
                        : "rgba(124, 106, 255, 0.5)",
                    borderTop: b.f ? "1px dashed rgba(124, 106, 255, 0.3)" : "none",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-[6px] mt-3">
            {bars.map((b) => (
              <div key={b.n} className={`flex-1 text-center text-[11px] ${b.c ? "text-white font-medium" : "text-[var(--muted)]"}`}>
                {b.n}
              </div>
            ))}
          </div>
          <div className="text-center text-[11px] text-[var(--muted)] mt-4">Subjects in Training Data</div>
        </div>
      </div>
    </section>
  );
}

/* ─── NETWORKS ─── */
function Networks() {
  return (
    <section className="py-24 px-6" id="capabilities">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-[32px] leading-tight tracking-tight mb-4">
          Six Neural Networks Mapped
        </h2>
        <p className="text-[15px] text-[var(--muted)] mb-12 max-w-lg font-light">
          Mind.new identifies how sensory processing differs across the brain&apos;s key functional networks.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Visual", desc: "Light, color, motion, pattern processing", pct: 55, icon: <circle cx="12" cy="12" r="3" /> },
            { name: "Auditory", desc: "Sound, noise, speech, music perception", pct: 72, icon: <><path d="M12 3v18" /><path d="M8 8v8" /><path d="M16 6v12" /><path d="M4 10v4" /><path d="M20 9v6" /></> },
            { name: "Social", desc: "Face, emotion, and social cue processing", pct: 91, icon: <><circle cx="9" cy="7" r="3" /><circle cx="15" cy="7" r="3" /><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" /></> },
            { name: "Default Mode", desc: "Self-reflection, inner thought, imagination", pct: 48, icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l2 2" /></> },
            { name: "Salience", desc: "Filtering what matters from background", pct: 63, icon: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z" /></> },
            { name: "Motor", desc: "Movement, coordination, body awareness", pct: 85, icon: <><path d="M18 8a6 6 0 01-6 6" /><path d="M6 16a6 6 0 016-6" /><circle cx="12" cy="12" r="2" /></> },
          ].map((net) => (
            <div key={net.name} className="card p-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-60">
                {net.icon}
              </svg>
              <h3 className="text-[14px] font-medium mb-1">{net.name}</h3>
              <p className="text-[12px] text-[var(--muted)] mb-3 font-light">{net.desc}</p>
              <div className="w-full h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" style={{ width: `${net.pct}%` }} />
              </div>
              <div className="text-[11px] text-[var(--muted)] mt-1.5">{net.pct}% divergence</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCTS ─── */
function Products() {
  return (
    <section className="py-24 px-6" id="products">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-[32px] leading-tight tracking-tight mb-4">Built on Mind.new</h2>
        <p className="text-[15px] text-[var(--muted)] mb-12 max-w-lg font-light">
          The foundation model powers practical tools for autism accessibility.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Sensory Audit", desc: "Upload a video of any space. Analyze visual and auditory stimuli second-by-second. Get an accessibility score and specific recommendations.", tag: "Live", live: true },
            { name: "Brain Comparison", desc: "Input any stimulus. See side-by-side neurotypical vs neurodiverse brain activation. Understand exactly where processing diverges.", tag: "Live", live: true },
            { name: "Sensory Passport", desc: "Personalized sensory profile through a 5-minute calibration. A portable document for schools, workplaces, and clinics.", tag: "Coming Soon", live: false },
            { name: "Neurotrack", desc: "Therapy progress tracking with dashboards, developmental milestones, and goal-based reporting linked to sensory profiles.", tag: "In Development", live: false },
          ].map((p) => (
            <div key={p.name} className="card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[15px] font-medium">{p.name}</h3>
                <span className={`text-[11px] px-2.5 py-0.5 rounded-full ${p.live ? "bg-[var(--accent)]/10 text-[var(--accent)]" : "bg-white/5 text-[var(--muted)]"}`}>{p.tag}</span>
              </div>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── NUMBERS ─── */
function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.5 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
      <div className="text-[36px] font-medium text-white tabular-nums tracking-tight">{value}</div>
      <div className="text-[12px] text-[var(--muted)] mt-1 font-light">{label}</div>
    </div>
  );
}

function Numbers() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1024px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <Counter value="933" label="Brain recordings analyzed" />
        <Counter value="820" label="Neural connections mapped" />
        <Counter value="20,484" label="Cortical points predicted" />
        <Counter value="6" label="Brain networks profiled" />
      </div>
    </section>
  );
}

/* ─── TIMELINE ─── */
function Timeline() {
  const items = [
    { v: "v0.1", n: "Seed", d: "Foundation model trained. Statistical brain transform. Text and audio input. Live API.", c: true },
    { v: "v0.5", n: "Sprout", d: "GPU fine-tuning. Sensory subtypes. Video input. Age-specific models.", c: false },
    { v: "v1.0", n: "Bloom", d: "Clinical validation. 10K+ subjects. Sensory Passport. Published accuracy metrics.", c: false },
    { v: "v2.0", n: "Canopy", d: "Real-time processing. EEG integration. Wearable support. 100K+ subjects.", c: false },
    { v: "v3.0", n: "Forest", d: "Foundation model for all neurodiversity. ADHD, SPD, anxiety. 400K+ subjects.", c: false },
  ];
  return (
    <section className="py-24 px-6" id="roadmap">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-[32px] leading-tight tracking-tight mb-14">Roadmap</h2>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={item.v} className="flex gap-5 group">
              <div className="flex flex-col items-center">
                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${item.c ? "bg-[var(--accent)]" : "bg-white/10 group-hover:bg-white/20 transition"}`} />
                {i < items.length - 1 && <div className="w-px flex-1 bg-[var(--border)]" />}
              </div>
              <div className="pb-10">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className={`text-[18px] font-medium ${item.c ? "gradient-text" : "text-[var(--muted)]"}`}>{item.v}</span>
                  <span className="text-[12px] text-[var(--muted)]">{item.n}</span>
                  {item.c && <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">Current</span>}
                </div>
                <p className="text-[13px] text-[var(--muted)] font-light">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-[32px] leading-tight tracking-tight mb-4">
          Build with <span className="gradient-text">Mind.new</span>
        </h2>
        <p className="text-[15px] text-[var(--muted)] mb-8 max-w-md font-light">
          API access for researchers, clinics, schools, and companies building
          autism-accessible products.
        </p>
        <div className="flex gap-3">
          <a href="mailto:ibrahimshaheer75@gmail.com?subject=Mind.new%20API%20Access" className="text-[13px] px-6 py-2.5 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition">
            Request Access
          </a>
          <a href="https://leezadeck.my.canva.site/" className="text-[13px] px-6 py-2.5 rounded-full border border-white/10 text-[var(--text)] hover:border-white/20 transition">
            About Leeza Care
          </a>
        </div>
      </div>
    </section>
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
