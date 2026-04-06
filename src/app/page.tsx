"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

/* ─── SCROLL REVEAL ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.querySelectorAll(".reveal").forEach((c) => c.classList.add("visible")); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function S({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) {
  const ref = useReveal();
  return <section ref={ref} id={id} className={`py-24 px-6 ${className}`}>{children}</section>;
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Dv />
      <Problem />
      <Dv />
      <Architecture />
      <Dv />
      <Scale />
      <Dv />
      <Networks />
      <Dv />
      <Products />
      <Dv />
      <Numbers />
      <Dv />
      <Timeline />
      <Dv />
      <CTA />
      <Footer />
    </main>
  );
}

function Dv() { return <div className="h-px bg-[var(--border)] max-w-[1024px] mx-auto" />; }

/* ─── NAV ─── */
function Nav() {
  const [s, setS] = useState(false);
  useEffect(() => { const h = () => setS(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${s ? "bg-[#050507]/80 backdrop-blur-xl border-b border-[var(--border)]" : ""}`}>
      <div className="max-w-[1024px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/brain/brain_hero_main.png" alt="" className="h-9 w-9 object-contain opacity-80" />
          <span className="text-[28px] tracking-tight leading-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
            <span className="gradient-text">mind</span>
            <span className="text-[#52525b]" style={{ fontStyle: "normal" }}>.</span>
            <span className="text-[#d4d4d8] font-light">new</span>
          </span>
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

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-24 pb-12 px-6 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute w-[500px] h-[300px] rounded-full bg-[#7c6aff] opacity-[0.04] blur-[100px] top-16 right-1/4 pointer-events-none" />

      <div className="relative max-w-[1024px] mx-auto flex items-center justify-between gap-8">
        {/* Left */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase">Introducing Cortex v0.1</span>
          </div>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] font-medium">
            The Foundation Model{" "}
            <span className="block">for the <span className="gradient-text">Neurodiverse Brain</span></span>
          </h1>
          <p className="text-[15px] text-[var(--muted)] mt-4 max-w-[420px] leading-relaxed font-light">
            Cortex is the world&apos;s first AI foundation model that predicts how
            autistic minds experience sight, sound, and language — mapping
            20,484 cortical points in real time.
          </p>
          <div className="flex items-center gap-3 mt-7">
            <a href="#research" className="text-[13px] px-5 py-2 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition">Explore the Research</a>
            <a href="#contact" className="text-[13px] px-5 py-2 rounded-full border border-white/10 text-[var(--text)] hover:border-white/20 transition">Request API Access</a>
          </div>
          <div className="flex gap-8 mt-10 pt-5 border-t border-[var(--border)]">
            {[["933", "brain scans"], ["20,484", "vertices"], ["820", "connections"]].map(([n, l]) => (
              <div key={l}><div className="text-[18px] font-medium text-white tabular-nums">{n}</div><div className="text-[10px] text-[var(--muted)] mt-0.5">{l}</div></div>
            ))}
          </div>
        </div>

        {/* Right: Real brain images */}
        <div className="hidden lg:block relative w-[420px] h-[340px] flex-shrink-0">
          {/* Main brain - left hemisphere */}
          <img
            src="/brain/brain_hero_main.png"
            alt="Predicted brain activity - left hemisphere"
            className="absolute w-[240px] top-4 left-0 drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(124, 106, 255, 0.15))" }}
          />
          {/* Second brain - right hemisphere, offset with gap */}
          <img
            src="/brain/brain_hero_medial.png"
            alt="Predicted brain activity - right hemisphere"
            className="absolute w-[220px] top-12 right-[-10px] drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(255, 107, 107, 0.12))" }}
          />
          {/* Labels */}
          <div className="absolute bottom-4 left-4">
            <div className="text-[10px] text-[var(--accent)] font-medium">Actual brain activity</div>
          </div>
          <div className="absolute bottom-4 right-4 text-right">
            <div className="text-[10px] text-[var(--accent2)] font-medium">Predicted brain activity</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function Problem() {
  return (
    <S id="research">
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="reveal text-[26px] leading-tight tracking-tight">Understanding Neurodiversity at Scale</h2>
          <div className="reveal reveal-delay-1 space-y-4 text-[14px] text-[var(--muted)] leading-relaxed font-light mt-5">
            <p>Understanding how autistic brains process the world has required individual brain scans — expensive, slow, and impossible for many.</p>
            <p className="text-[var(--text)]">Cortex changes this. A foundation model that predicts how any neurodiverse brain responds to any stimulus — transforming months of lab work into seconds of computation.</p>
          </div>
        </div>

        {/* Real NT vs ND comparison */}
        <div className="reveal reveal-delay-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="card p-3 text-center">
              <div className="text-[10px] text-[var(--accent)] font-medium mb-2">Neurotypical</div>
              <img src="/brain/brain_nt_left.png" alt="NT brain" className="w-full rounded" />
            </div>
            <div className="card p-3 text-center">
              <div className="text-[10px] text-[var(--accent2)] font-medium mb-2">Neurodiverse</div>
              <img src="/brain/brain_nd_left.png" alt="ND brain" className="w-full rounded" />
            </div>
          </div>
          <div className="text-[10px] text-[var(--muted)] text-center mt-3 font-light">Same stimulus, different neural activation patterns</div>
        </div>
      </div>
    </S>
  );
}

/* ─── ARCHITECTURE ─── */
function Architecture() {
  return (
    <S>
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[26px] leading-tight tracking-tight mb-3">Cortex Architecture</h2>
        <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-10 max-w-lg font-light">A proprietary tri-modal pipeline purpose-built for predicting neurodiverse brain activity.</p>

        <div className="reveal reveal-delay-2 card p-6 overflow-x-auto">
          <div className="flex items-center gap-4 min-w-[600px]">
            {/* Inputs */}
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              {["Video", "Audio", "Text"].map((m) => (
                <div key={m} className="w-[70px] h-8 rounded border border-[var(--border)] flex items-center justify-center text-[11px] text-[var(--muted)]">{m}</div>
              ))}
            </div>
            <span className="text-[var(--muted)] text-lg">→</span>
            <div className="w-[90px] h-24 rounded-lg border border-[var(--accent)]/15 bg-[var(--accent)]/[0.03] flex items-center justify-center text-[11px] text-[var(--accent)] font-medium flex-shrink-0">Encoders</div>
            <span className="text-[var(--muted)] text-lg">→</span>
            <div className="w-[90px] h-24 rounded-lg border border-white/8 bg-white/[0.02] flex items-center justify-center text-[11px] text-[var(--muted)] font-medium flex-shrink-0">Transformer</div>
            <span className="text-[var(--muted)] text-lg">→</span>
            <div className="w-[90px] h-24 rounded-lg border border-[var(--accent2)]/15 bg-[var(--accent2)]/[0.03] flex items-center justify-center text-[11px] text-[var(--accent2)] font-medium flex-shrink-0">ND Mapper</div>
            <span className="text-[var(--muted)] text-lg">→</span>
            <div className="flex-shrink-0">
              <img src="/brain/brain_nt_right.png" alt="Brain output" className="w-20 h-20 rounded-lg object-cover" style={{ filter: "drop-shadow(0 0 20px rgba(124, 106, 255, 0.2))" }} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mt-4">
          {[
            ["Multi-Modal Encoding", "Specialized encoders process sight, sound, and language independently."],
            ["Universal Integration", "A deep transformer fuses modalities into brain-aligned representations."],
            ["Neurodiverse Mapping", "Transforms predictions to neurodiverse patterns from real brain recordings."],
          ].map(([t, d], i) => (
            <div key={t} className={`reveal reveal-delay-${i + 2} card p-4`}>
              <div className="text-[10px] text-[var(--accent)] font-medium mb-1.5">0{i + 1}</div>
              <h3 className="text-[13px] font-medium mb-1.5">{t}</h3>
              <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </S>
  );
}

/* ─── SCALE ─── */
function Scale() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  const bars = [{ n: "50", h: 12 }, { n: "100", h: 20 }, { n: "200", h: 30 }, { n: "400", h: 40 }, { n: "933", h: 52, c: true }, { n: "10K", h: 65, f: true }, { n: "100K", h: 80, f: true }, { n: "400K", h: 95, f: true }];
  return (
    <S>
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[26px] leading-tight tracking-tight mb-3">Cortex Scaling Laws</h2>
        <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-10 max-w-lg font-light">Cortex follows a scaling law: accuracy increases log-linearly with more brain data. No plateau reached.</p>
        <div ref={ref} className="reveal reveal-delay-2 card p-6">
          <div className="flex items-end gap-2 h-44">
            {bars.map((b, i) => (
              <div key={b.n} className="flex-1 flex flex-col items-center justify-end h-full">
                <div className="w-full rounded-sm" style={{ height: vis ? `${b.h}%` : "0%", transition: `height 1s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s`, background: b.c ? "linear-gradient(to top, #7c6aff, #ff6b6b)" : b.f ? "rgba(124,106,255,0.08)" : "rgba(124,106,255,0.35)", borderTop: b.f ? "1px dashed rgba(124,106,255,0.2)" : "none" }} />
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            {bars.map((b) => (<div key={b.n} className={`flex-1 text-center text-[10px] ${b.c ? "text-white font-medium" : "text-[var(--muted)]"}`}>{b.n}</div>))}
          </div>
          <div className="text-center text-[10px] text-[var(--muted)] mt-2">Subjects in training</div>
        </div>
      </div>
    </S>
  );
}

/* ─── NETWORKS ─── */
function Networks() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return (
    <S id="capabilities">
      <div ref={ref} className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[26px] leading-tight tracking-tight mb-3">What Cortex Understands</h2>
        <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-10 max-w-lg font-light">Cortex maps how sensory processing differs across six key brain networks.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { name: "Visual", pct: 55 }, { name: "Auditory", pct: 72 }, { name: "Social", pct: 91 },
            { name: "Default Mode", pct: 48 }, { name: "Salience", pct: 63 }, { name: "Motor", pct: 85 },
          ].map((net, i) => (
            <div key={net.name} className={`reveal reveal-delay-${Math.min(i + 1, 5)} card p-4`}>
              <h3 className="text-[13px] font-medium mb-3">{net.name}</h3>
              <div className="w-full h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" style={{ width: vis ? `${net.pct}%` : "0%", transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s` }} />
              </div>
              <div className="text-[10px] text-[var(--muted)] mt-1.5">{net.pct}% divergence</div>
            </div>
          ))}
        </div>
      </div>
    </S>
  );
}

/* ─── PRODUCTS ─── */
function Products() {
  return (
    <S id="products">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[26px] leading-tight tracking-tight mb-3">Powered by Cortex</h2>
        <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-10 max-w-lg font-light">The foundation model enables practical tools for autism accessibility.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { name: "Sensory Audit", desc: "Upload video of any space. Get second-by-second sensory analysis, accessibility score, and actionable recommendations.", tag: "Live", live: true },
            { name: "Brain Comparison", desc: "Side-by-side neurotypical vs neurodiverse brain activation maps for any stimulus input.", tag: "Live", live: true },
            { name: "Sensory Passport", desc: "Personalized sensory profile through 5-minute calibration. Portable document for schools and clinics.", tag: "Coming Soon", live: false },
            { name: "Neurotrack", desc: "Therapy progress tracking with dashboards, developmental milestones, and sensory-linked reporting.", tag: "In Development", live: false },
          ].map((p, i) => (
            <div key={p.name} className={`reveal reveal-delay-${Math.min(i + 1, 4)} card p-5`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[14px] font-medium">{p.name}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${p.live ? "bg-[var(--accent)]/10 text-[var(--accent)]" : "bg-white/5 text-[var(--muted)]"}`}>{p.tag}</span>
              </div>
              <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </S>
  );
}

/* ─── NUMBERS ─── */
function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.5 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-[1024px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {[["933", "Brain recordings"], ["820", "Neural connections"], ["20,484", "Cortical points"], ["6", "Networks profiled"]].map(([n, l], i) => (
          <div key={l} style={{ transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)" }}>
            <div className="text-[28px] font-medium text-white tabular-nums tracking-tight">{n}</div>
            <div className="text-[11px] text-[var(--muted)] mt-0.5 font-light">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── TIMELINE ─── */
function Timeline() {
  return (
    <S id="roadmap">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[26px] leading-tight tracking-tight mb-10">Roadmap</h2>
        {[
          { v: "Cortex v0.1", n: "Seed", d: "Foundation model trained. Statistical brain transform. Live API.", c: true },
          { v: "Cortex v0.5", n: "Sprout", d: "GPU fine-tuning. Sensory subtypes. Video input. Age-specific models.", c: false },
          { v: "Cortex v1.0", n: "Bloom", d: "Clinically validated. 10K+ subjects. Sensory Passport. Published metrics.", c: false },
          { v: "Cortex v2.0", n: "Canopy", d: "Real-time processing. EEG integration. Wearable support. 100K+ subjects.", c: false },
          { v: "Cortex v3.0", n: "Forest", d: "Foundation model for all neurodiversity. ADHD, SPD, anxiety. 400K+ subjects.", c: false },
        ].map((item, i) => (
          <div key={item.v} className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex gap-4`}>
            <div className="flex flex-col items-center">
              <div className={`w-2 h-2 rounded-full mt-2 ${item.c ? "bg-[var(--accent)]" : "bg-white/10"}`} />
              {i < 4 && <div className="w-px flex-1 bg-[var(--border)]" />}
            </div>
            <div className="pb-7">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[16px] font-medium ${item.c ? "gradient-text" : "text-[var(--muted)]"}`}>{item.v}</span>
                <span className="text-[11px] text-[var(--muted)]">{item.n}</span>
                {item.c && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">Current</span>}
              </div>
              <p className="text-[12px] text-[var(--muted)] font-light">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </S>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <S id="contact">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="reveal text-[26px] leading-tight tracking-tight mb-3">Build with <span className="gradient-text">Cortex</span></h2>
        <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-7 max-w-md font-light">API access for researchers, clinics, schools, and companies building accessible products.</p>
        <div className="reveal reveal-delay-2 flex gap-3">
          <a href="mailto:ibrahim.raza@leeza.app?subject=Cortex%20API%20Access" className="text-[13px] px-5 py-2 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition">Request Access</a>
          <a href="https://leeza.app" className="text-[13px] px-5 py-2 rounded-full border border-white/10 text-[var(--text)] hover:border-white/20 transition">About Leeza Care</a>
        </div>
      </div>
    </S>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-5 px-6">
      <div className="max-w-[1024px] mx-auto flex items-center justify-between text-[11px] text-[var(--muted)]">
        <span>Mind.new by Leeza Care Research &amp; Development Foundation</span>
        <div className="flex gap-5">
          <a href="https://leeza.app" className="hover:text-white transition">About</a>
          <a href="mailto:ibrahim.raza@leeza.app" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
