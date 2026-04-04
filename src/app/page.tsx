"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="section-divider max-w-6xl mx-auto" />
      <Challenge />
      <div className="section-divider max-w-6xl mx-auto" />
      <HowItWorks />
      <div className="section-divider max-w-6xl mx-auto" />
      <ScalingLaws />
      <div className="section-divider max-w-6xl mx-auto" />
      <Capabilities />
      <div className="section-divider max-w-6xl mx-auto" />
      <Products />
      <div className="section-divider max-w-6xl mx-auto" />
      <Metrics />
      <div className="section-divider max-w-6xl mx-auto" />
      <Roadmap />
      <div className="section-divider max-w-6xl mx-auto" />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M8 12s1.5-4 4-4 4 4 4 4-1.5 4-4 4-4-4-4-4z" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">Mind.new</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          <a href="#how" className="hover:text-white transition">Research</a>
          <a href="#capabilities" className="hover:text-white transition">Capabilities</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
        </div>
        <a href="#contact" className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 transition">
          Request Access
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glows */}
      <div className="hero-glow bg-[var(--accent)] top-1/4 left-1/4" />
      <div className="hero-glow bg-[var(--accent2)] bottom-1/4 right-1/4 animation-delay-2000" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-[var(--muted)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Research Preview
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          <span className="block">An AI Model of the</span>
          <span className="gradient-text block mt-2">Neurodiverse Brain</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
          Predicting how autistic minds experience sight, sound, and language.
          Trained on <span className="text-white font-medium">933 brain scans</span> across{" "}
          <span className="text-white font-medium">20 research sites</span> worldwide.
        </p>

        {/* Brain visualization placeholder */}
        <div className="relative mx-auto mb-16" style={{ width: 340, height: 340 }}>
          <div className="brain-ring" style={{ width: 340, height: 340, top: 0, left: 0 }} />
          <div className="brain-ring" style={{ width: 280, height: 280, top: 30, left: 30, animationDelay: "1s" }} />
          <div className="brain-ring" style={{ width: 220, height: 220, top: 60, left: 60, animationDelay: "2s" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[var(--accent)] via-[var(--accent2)] to-orange-400 opacity-40 blur-xl animate-pulse-slow" />
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-bold stat-number">20,484</span>
              <span className="text-sm text-[var(--muted)] mt-1">brain vertices predicted</span>
            </div>
          </div>
          {/* Labels */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-right">
            <span className="text-xs text-[var(--accent)] font-medium block">Actual</span>
            <span className="text-xs text-[var(--muted)]">brain activity</span>
          </div>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-left">
            <span className="text-xs text-[var(--accent2)] font-medium block">Predicted</span>
            <span className="text-xs text-[var(--muted)]">brain activity</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4">
          <a href="#how" className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition">
            Explore the Research
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-full border border-white/15 text-sm font-medium hover:bg-white/5 transition">
            Request API Access
          </a>
        </div>
      </div>
    </section>
  );
}

function Challenge() {
  return (
    <section className="py-32 px-6" id="challenge">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
          Understanding Neurodiversity:<br />
          <span className="text-[var(--muted)]">The Challenge of Scale</span>
        </h2>
        <div className="space-y-6 text-lg text-[var(--muted)] leading-relaxed">
          <p>
            For decades, understanding how autistic brains process the world has required
            expensive brain scans for every individual. This has made autism research slow,
            costly, and limited to small studies of 20-50 people.
          </p>
          <p className="text-white">
            Today, we&apos;re releasing Mind.new -- a foundation model that acts as a digital
            mirror of the neurodiverse brain. It predicts how autistic minds respond to
            sight, sound, and language, transforming months of lab work into seconds of computation.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: "🔬",
              title: "Scaled Resolution",
              desc: "Predicts whole-brain activity across 20,484 cortical vertices -- mapping the complete sensory landscape.",
            },
            {
              icon: "🧬",
              title: "Scaled Data",
              desc: "Trained on 933 brain recordings across 20 international sites. Scaling to 400,000+ subjects.",
            },
            {
              icon: "🎯",
              title: "High-Fidelity Predictions",
              desc: "Identifies 820 statistically significant neural connections that differ in the neurodiverse brain.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border border-[var(--border)] card-hover">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-32 px-6" id="how">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          A Three-Stage Architecture
        </h2>
        <p className="text-lg text-[var(--muted)] mb-16">
          Mind.new predicts brain activity through a proprietary multi-modal pipeline.
        </p>

        <div className="space-y-0">
          {[
            {
              num: "01",
              title: "Multi-Modal Encoding",
              desc: "The model processes audio, video, and text through specialized neural encoders that capture the same features the human brain responds to. Each modality is encoded independently to preserve channel-specific information.",
              color: "var(--accent)",
            },
            {
              num: "02",
              title: "Universal Integration",
              desc: "These encodings are fused through a deep transformer architecture that learns universal representations shared across all stimuli, tasks, and individuals -- capturing how the brain integrates multi-sensory information.",
              color: "var(--accent2)",
            },
            {
              num: "03",
              title: "Neurodiverse Brain Mapping",
              desc: "A specialized mapping layer transforms predictions from neurotypical patterns to neurodiverse patterns, trained on hundreds of real autism brain scans. This is where Mind.new diverges from general brain models.",
              color: "#ffb86c",
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-8 py-10 border-b border-[var(--border)] last:border-0">
              <div className="flex-shrink-0 w-16">
                <span className="text-3xl font-bold" style={{ color: step.color }}>{step.num}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className="mt-16 p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {["Video", "Audio", "Text"].map((input, i) => (
              <div key={input} className="flex items-center gap-3">
                <div className="w-20 h-12 rounded-lg border border-[var(--border)] flex items-center justify-center text-sm text-[var(--muted)]">
                  {input}
                </div>
                <span className="text-[var(--muted)]">→</span>
                <div className="w-24 h-12 rounded-lg bg-white/5 flex items-center justify-center text-xs font-medium" style={{ color: ["var(--accent)", "var(--accent2)", "#ffb86c"][i] }}>
                  Encoder {i + 1}
                </div>
              </div>
            ))}
            <span className="text-[var(--muted)]">→</span>
            <div className="w-28 h-12 rounded-lg bg-gradient-to-r from-[var(--accent)]/20 to-[var(--accent2)]/20 border border-[var(--accent)]/20 flex items-center justify-center text-xs font-semibold">
              Transformer
            </div>
            <span className="text-[var(--muted)]">→</span>
            <div className="w-28 h-12 rounded-lg bg-gradient-to-r from-[var(--accent2)]/20 to-orange-500/20 border border-[var(--accent2)]/20 flex items-center justify-center text-xs font-semibold">
              ND Mapper
            </div>
          </div>
          <div className="flex justify-between mt-6 text-xs text-[var(--muted)]">
            <span>True stimuli</span>
            <span>Predicted neurodiverse brain response</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScalingLaws() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Scaling Laws
        </h2>
        <p className="text-lg text-[var(--muted)] mb-12 max-w-2xl">
          Mind.new follows a scaling law: prediction accuracy increases log-linearly
          as we add more brain data. Performance has not yet plateaued, suggesting
          significant room for improvement as more data becomes available.
        </p>

        {/* Chart visualization */}
        <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <div className="flex items-end gap-3 h-64 mb-6">
            {[
              { h: 20, label: "50", subjects: true },
              { h: 32, label: "100" },
              { h: 42, label: "200" },
              { h: 50, label: "400" },
              { h: 58, label: "871", subjects: true },
              { h: 62, label: "933", current: true },
              { h: 72, label: "10K", future: true },
              { h: 80, label: "100K", future: true },
              { h: 88, label: "400K", future: true },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg transition-all duration-1000"
                  style={{
                    height: `${bar.h}%`,
                    background: bar.current
                      ? "linear-gradient(to top, var(--accent), var(--accent2))"
                      : bar.future
                        ? "repeating-linear-gradient(45deg, var(--accent)/30, var(--accent)/30 2px, transparent 2px, transparent 6px)"
                        : "var(--accent)",
                    opacity: bar.future ? 0.4 : 1,
                  }}
                />
                <span className={`text-xs ${bar.current ? "text-white font-bold" : "text-[var(--muted)]"}`}>
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-[var(--muted)]">
            Brain Scans in Training Data
          </div>
          <div className="flex justify-between mt-4 text-xs">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[var(--accent)]" /> Trained
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" /> Current (v0.1)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded opacity-40 bg-[var(--accent)]" /> Planned
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="py-32 px-6" id="capabilities">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          What Mind.new Understands
        </h2>
        <p className="text-lg text-[var(--muted)] mb-16">
          By simulating the neurodiverse brain in-silico, Mind.new can identify
          how sensory processing differs across six key neural networks.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: "👁", name: "Visual Processing", desc: "How light, color, motion, and clutter are processed differently", pct: 55 },
            { icon: "👂", name: "Auditory Processing", desc: "How sound, noise, music, and speech affect the brain", pct: 72 },
            { icon: "🫂", name: "Social Cognition", desc: "How faces, emotions, and social cues are interpreted", pct: 91 },
            { icon: "🧠", name: "Default Mode", desc: "Internal thought, self-reflection, and imagination patterns", pct: 48 },
            { icon: "⚡", name: "Salience Detection", desc: "What the brain deems important vs background noise", pct: 63 },
            { icon: "🎯", name: "Motor / Body", desc: "Movement planning, body awareness, and coordination", pct: 85 },
          ].map((cap) => (
            <div key={cap.name} className="p-6 rounded-2xl border border-[var(--border)] card-hover">
              <div className="text-2xl mb-3">{cap.icon}</div>
              <h3 className="font-semibold mb-1 text-sm">{cap.name}</h3>
              <p className="text-xs text-[var(--muted)] mb-4 leading-relaxed">{cap.desc}</p>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="metric-bar" style={{ width: `${cap.pct}%` }} />
              </div>
              <span className="text-xs text-[var(--muted)] mt-1 block">{cap.pct}% divergence detected</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="py-32 px-6" id="products">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Built on Mind.new
        </h2>
        <p className="text-lg text-[var(--muted)] mb-16">
          The foundation model powers a suite of practical tools for autism accessibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Sensory Audit",
              desc: "Upload a video of any space. Mind.new analyzes visual and auditory stimuli second-by-second, generates an Autism Accessibility Score, and provides specific recommendations to reduce sensory barriers.",
              tag: "Live",
              tagColor: "var(--accent)",
            },
            {
              name: "Brain Comparison",
              desc: "Input any stimulus -- text, audio, or video. See side-by-side brain activation maps for neurotypical vs neurodiverse processing. Understand exactly where and how sensory processing diverges.",
              tag: "Live",
              tagColor: "var(--accent)",
            },
            {
              name: "Sensory Passport",
              desc: "A personalized sensory profile for each individual. Generated through a 5-minute video calibration, this portable document helps schools, workplaces, and clinics provide the right accommodations.",
              tag: "Coming Soon",
              tagColor: "var(--muted)",
            },
            {
              name: "Neurotrack",
              desc: "Therapy progress tracking with therapist dashboards, developmental milestone monitoring, and goal-based reporting. Connects sensory profiles to intervention outcomes over time.",
              tag: "In Development",
              tagColor: "var(--accent2)",
            },
          ].map((product) => (
            <div key={product.name} className="p-8 rounded-2xl border border-[var(--border)] card-hover">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--border)]" style={{ color: product.tagColor }}>
                  {product.tag}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, label }: { end: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className={`text-5xl md:text-6xl font-bold stat-number gradient-text transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        {end}
      </div>
      <div className="text-sm text-[var(--muted)] mt-2">{label}</div>
    </div>
  );
}

function Metrics() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end="933" label="Brain scans trained on" />
          <AnimatedCounter end="820" label="Significant neural connections" />
          <AnimatedCounter end="20" label="Research sites worldwide" />
          <AnimatedCounter end="20,484" label="Brain vertices predicted" />
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="py-32 px-6" id="roadmap">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Roadmap
        </h2>

        <div className="space-y-0">
          {[
            { version: "v0.1", name: "Seed", status: "current", desc: "Statistical brain transform from 933 ABIDE + OpenNeuro subjects. Text and audio input. Live API." },
            { version: "v0.5", name: "Sprout", status: "next", desc: "GPU-accelerated fine-tuning. 4-6 sensory subtypes. Video input. Age-specific models. 2,000+ subjects." },
            { version: "v1.0", name: "Bloom", status: "planned", desc: "Validated against 500+ behavioral responses. 10,000+ subjects. Published sensitivity/specificity. Sensory Passport launch." },
            { version: "v2.0", name: "Canopy", status: "future", desc: "EEG integration. Real-time wearable support. Longitudinal tracking. 100,000+ subjects. Multi-language." },
            { version: "v3.0", name: "Forest", status: "future", desc: "Foundation model for ALL neurodiversity. ADHD, SPD, PTSD support. 400,000+ subjects. Adaptive environments." },
          ].map((item, i) => (
            <div key={item.version} className="flex gap-6 pb-12 last:pb-0">
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${item.status === "current" ? "bg-[var(--accent)]" : item.status === "next" ? "bg-[var(--accent2)]" : "bg-white/10"}`} />
                {i < 4 && <div className="w-px flex-1 bg-[var(--border)] mt-2" />}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-2xl font-bold ${item.status === "current" ? "gradient-text" : item.status === "next" ? "text-[var(--accent2)]" : "text-[var(--muted)]"}`}>
                    {item.version}
                  </span>
                  <span className="text-sm text-[var(--muted)]">{item.name}</span>
                  {item.status === "current" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">Current</span>
                  )}
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Build with <span className="gradient-text">Mind.new</span>
        </h2>
        <p className="text-lg text-[var(--muted)] mb-12">
          We&apos;re opening API access to researchers, clinics, schools, and companies
          building autism-accessible products. Join the waitlist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:ibrahimshaheer75@gmail.com?subject=Mind.new%20API%20Access%20Request"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-white font-semibold text-sm hover:opacity-90 transition"
          >
            Request API Access
          </a>
          <a
            href="https://github.com/Ibrhimovic9989"
            className="px-10 py-4 rounded-full border border-white/15 text-sm font-medium hover:bg-white/5 transition"
          >
            View on GitHub
          </a>
        </div>

        <p className="text-xs text-[var(--muted)] mt-8">
          Mind.new is a research project by{" "}
          <a href="https://leezadeck.my.canva.site/" className="underline hover:text-white transition">
            Leeza Care Research &amp; Development Foundation
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-[var(--muted)]">
        <span>Mind.new by Leeza Care R&D Foundation</span>
        <div className="flex gap-6">
          <a href="https://leezadeck.my.canva.site/" className="hover:text-white transition">About</a>
          <a href="mailto:ibrahimshaheer75@gmail.com" className="hover:text-white transition">Contact</a>
          <a href="https://github.com/Ibrhimovic9989" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
