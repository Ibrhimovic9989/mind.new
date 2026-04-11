"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

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

function S({ children, id }: { children: ReactNode; id?: string }) {
  const ref = useReveal();
  return <section ref={ref} id={id} className="py-16 px-6">{children}</section>;
}

function Dv() { return <div className="h-px bg-[var(--border)] max-w-[900px] mx-auto" />; }

export default function RoadmapPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="relative pt-24 pb-10 px-6">
        <div className="absolute w-[400px] h-[250px] rounded-full bg-[#7c6aff] opacity-[0.04] blur-[100px] top-16 right-1/4 pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase">Improvement Plan</span>
          </div>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] font-medium">
            AQAL <span className="gradient-text">Roadmap</span>
          </h1>
          <p className="text-[15px] text-[var(--muted)] mt-4 max-w-[520px] leading-relaxed font-light">
            Based on expert review. Organized by priority, compute requirements, and current progress. The directive: fix the CPU science first, then invest in GPU learning.
          </p>
        </div>
      </section>

      <Dv />

      {/* Issues */}
      <S id="issues">
        <div className="max-w-[900px] mx-auto">
          <h2 className="reveal text-[26px] tracking-tight mb-3">Issues Identified</h2>
          <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-8 font-light max-w-lg">Four structural weaknesses identified by expert review. These are not caveats — they are the core problems to solve.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { severity: "resolved", title: "Uncorrected Statistics", desc: "Fixed in v0.2: 387 FDR-corrected connections (q<0.05) with site harmonization and age/sex covariates. Down from 1,065 uncorrected. Core limbic/DMN findings survive correction." },
              { severity: "critical", title: "Statistics, Not Learning", desc: "The ND transform is a fixed per-vertex scale+shift from t-tests. It discards covariance structure and cannot capture individual variation. A linear patch, not a learned model." },
              { severity: "high", title: "Resting → Task-Evoked Leap", desc: "Connectivity from resting-state fMRI applied to task-evoked predictions. Assumes resting wiring maps to active processing — the error is unquantified." },
              { severity: "high", title: "Average Neurodiverse Brain", desc: "88.3% of vertices get identical alteration regardless of individual. Autism is a spectrum — a single average risks stereotyping." },
              { severity: "high", title: "No Behavioral Ground Truth", desc: "Zero validation against sensory overload, eye-tracking, pupil dilation, GSR, or caregiver report. A visualization engine, not a validated tool." },
              { severity: "medium", title: "Dataset Limitations", desc: "871 subjects, 86.6% male, 20 heterogeneous sites, mixed ages. No site harmonization in v0.1. May not generalize." },
              { severity: "resolved", title: "No Uncertainty", desc: "Fixed in v0.2: 200-iteration bootstrap produces 95% credible intervals per vertex. Mean CI width 0.027. API returns uncertainty metadata." },
              { severity: "long-term", title: "No Early Detection", desc: "AQAL predicts brain activity from stimuli (forward). Early detection needs the inverse: behavior → neural differences → risk flag." },
            ].map((issue, i) => (
              <div key={issue.title} className={`reveal reveal-delay-${Math.min(i + 1, 3)} card p-5`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[13px] font-medium">{issue.title}</h3>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${
                    issue.severity === "resolved" ? "bg-green-500/10 text-green-400" :
                    issue.severity === "critical" ? "bg-red-500/10 text-red-400" :
                    issue.severity === "high" ? "bg-yellow-500/10 text-yellow-400" :
                    issue.severity === "medium" ? "bg-[var(--accent)]/10 text-[var(--accent)]" :
                    "bg-white/5 text-[var(--muted)]"
                  }`}>{issue.severity}</span>
                </div>
                <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </S>

      <Dv />

      {/* CPU Track */}
      <S id="cpu">
        <div className="max-w-[900px] mx-auto">
          <h2 className="reveal text-[26px] tracking-tight mb-3">Without GPU — Fix the Science</h2>
          <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-8 font-light max-w-lg">Most cleanup is data work and statistics, not deep learning. These address the three biggest flaws: uncorrected p-values, group-average predictions, and missing behavioral ground truth.</p>

          {[
            { priority: "P1", title: "FDR-Corrected Connectivity Map", status: "done", desc: "Ran 4,950 tests with Benjamini-Hochberg FDR correction, site harmonization, age and sex as covariates. Result: 387 FDR-corrected connections (q<0.05), 1,065 uncorrected, 48 Bonferroni.", detail: "v4 transform trained on Azure VM, uploaded to HuggingFace, APIs auto-load v4, paper updated with real numbers." },
            { priority: "P2", title: "Age Stratification", status: "done", desc: "Split 871 subjects into child (0-12), adolescent (12-18), adult (18+). Adolescents: 73 FDR connections (strongest signal). Children: 0 (insufficient power with 106+116 subjects). Adults: 1.", detail: "Age-band selector added to /api/compare endpoint and NeuroBrain frontend. Per-band transforms stored in v4.pt." },
            { priority: "P3", title: "Uncertainty Quantification", status: "done", desc: "200 bootstrap iterations producing 95% credible intervals for each of 20,484 vertices. Mean CI width: 0.027, max: 0.108. Propagated to API responses.", detail: "CI bounds stored in v4 transform. API returns uncertainty metadata (mean CI width, high-confidence vertex %)." },
            { priority: "P4", title: "Site Harmonization", status: "done", desc: "Site effects residualized from all 4,950 connectivity features across 20 sites via linear regression before statistical testing.", detail: "Implemented in v4 training pipeline. Per-site documentation not yet started." },
            { priority: "P5", title: "5-Minute Individual Calibration", status: "not-started", desc: "Design standardized stimulus set, collect brief behavioral response, fit per-person scaling vector with ordinary least squares (CPU linear solve).", detail: "Turns population average into a personal prior. No code written yet." },
            { priority: "P6", title: "Behavioral Validation Study", status: "not-started", desc: "AQAL predicts high visual-network divergence → measure pupil dilation, gaze aversion, caregiver stress rating. Report sensitivity, specificity, calibration curves.", detail: "Prospective study design needed. Requires IRB approval and clinical partner." },
            { priority: "P7", title: "Clinical Guardrails", status: "in-progress", desc: "Define referral language, risk-flag thresholds. Specify what 'increased divergence' triggers in a pediatric workflow — and what it does not.", detail: "Clinical disclaimer added to all API compare responses. Full ethics documentation not yet started." },
          ].map((item, i) => (
            <div key={item.priority} className={`reveal reveal-delay-${Math.min(i + 1, 3)} flex gap-4 mb-4`}>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold ${
                  item.status === "script-ready" ? "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20" :
                  item.status === "done" ? "bg-green-500/15 text-green-400 border border-green-500/20" :
                  "bg-white/5 text-[var(--muted)] border border-[var(--border)]"
                }`}>{item.priority}</div>
                {i < 6 && <div className="w-px flex-1 bg-[var(--border)] mt-1" />}
              </div>
              <div className="pb-4 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[14px] font-medium">{item.title}</h3>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full ${
                    item.status === "script-ready" ? "bg-yellow-500/10 text-yellow-400" :
                    item.status === "done" ? "bg-green-500/10 text-green-400" :
                    "bg-white/5 text-[var(--muted)]"
                  }`}>{item.status === "script-ready" ? "Script Ready" : item.status === "done" ? "Done" : "Not Started"}</span>
                </div>
                <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light mb-1">{item.desc}</p>
                <p className="text-[11px] text-[var(--muted)]/60 font-light italic">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </S>

      <Dv />

      {/* GPU Track */}
      <S id="gpu">
        <div className="max-w-[900px] mx-auto">
          <h2 className="reveal text-[26px] tracking-tight mb-3">With GPU — Learn the Neurodiverse Brain</h2>
          <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-8 font-light max-w-lg">The statistical transform is an approximation. These items replace it with learned models — but require GPU compute and large-scale datasets.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { title: "Conditional Encoder Fine-Tuning", timeline: "Months 3-8", desc: "Fine-tune the 177M-parameter transformer directly on autistic task fMRI using LoRA adapters per subgroup. Learn the ND manifold instead of patching." },
              { title: "Developmental Models", timeline: "Months 6-12", desc: "Separate encoders for infants/toddlers. Early autism markers appear in visual attention and social orienting during the first 18 months." },
              { title: "Inverse Pipeline (Brain→Behavior)", timeline: "Months 8-14", desc: "Flip the pipeline for screening: observe behavior, predict neural differences, output a risk flag — not a diagnosis." },
              { title: "Multi-Condition Expansion", timeline: "Months 10-18", desc: "Joint training for ADHD, SPD, anxiety. EEG fusion for portable real-time monitoring." },
              { title: "End-to-End Learned Uncertainty", timeline: "Months 6-10", desc: "Model ensembles or Bayesian neural nets so credible intervals come from the model itself, not post-hoc bootstrapping." },
            ].map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${Math.min(i + 1, 3)} card p-5`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[13px] font-medium">{item.title}</h3>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400">Blocked on GPU</span>
                </div>
                <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light mb-2">{item.desc}</p>
                <p className="text-[10px] text-[var(--muted)]/50">{item.timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </S>

      <Dv />

      {/* Early Detection */}
      <S id="detection">
        <div className="max-w-[900px] mx-auto">
          <h2 className="reveal text-[26px] tracking-tight mb-3">Toward Early Detection</h2>
          <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-8 font-light max-w-lg">AQAL does not detect autism today. Early detection requires the inverse problem — and three prerequisites.</p>

          <div className="space-y-4">
            {[
              { n: "1", title: "Train on infants and toddlers", desc: "Early markers are visual attention and social orienting in the first 18 months. Cannot extrapolate from adult resting-state maps." },
              { n: "2", title: "Flip the pipeline", desc: "Instead of stimulus→brain, build brain→behavior. Compare predicted sensory profiles to real home videos. A mismatch score becomes a risk flag, not a diagnosis." },
              { n: "3", title: "Clinical pathway integration", desc: "Output: 'increased visual and salience divergence relative to age norms, consider M-CHAT follow-up.' Models do not replace clinical assessment." },
            ].map((item) => (
              <div key={item.n} className="reveal flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-[12px] font-semibold flex-shrink-0">{item.n}</div>
                <div>
                  <h3 className="text-[14px] font-medium mb-1">{item.title}</h3>
                  <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </S>

      <Dv />

      {/* SaMD */}
      <S id="samd">
        <div className="max-w-[900px] mx-auto">
          <h2 className="reveal text-[26px] tracking-tight mb-3">Toward Clinical Diagnostic Rigidity</h2>
          <p className="reveal reveal-delay-1 text-[14px] text-[var(--muted)] mb-8 font-light max-w-lg">To transition from heuristic to Software as a Medical Device (SaMD).</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "ISO 13485 Quality Management System",
              "FDA De Novo classification pathway",
              "Prospective trials (ADOS-2 / ADI-R)",
              "Physiological validation (HRV, GSR)",
              "Predetermined Change Control Plan",
              "Prove clinical utility vs clinician alone",
            ].map((item, i) => (
              <div key={item} className={`reveal reveal-delay-${Math.min(i + 1, 3)} card p-4`}>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/5 text-[var(--muted)]">Future</span>
                  <p className="text-[12px] font-light">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </S>

      <Dv />

      {/* Progress */}
      <S id="progress">
        <div className="max-w-[900px] mx-auto">
          <h2 className="reveal text-[26px] tracking-tight mb-8">Progress Tracker</h2>

          <div className="reveal space-y-6">
            <ProgressGroup title="Done" color="green" items={[
              "Foundation model deployed (CPU, 20-30s inference)",
              "871-subject connectivity analysis with FDR correction (v4)",
              "387 FDR-corrected connections identified (q<0.05), site-harmonized",
              "Age-stratified transforms: child / adolescent / adult",
              "200-iteration bootstrap uncertainty (95% CI per vertex)",
              "v4 transform uploaded to HuggingFace, APIs auto-load",
              "Age-band selector in NeuroBrain API and frontend",
              "Uncertainty and CI metadata exposed in API responses",
              "Clinical disclaimer added to all compare responses",
              "Live API: predict, compare, connectivity, interpret",
              "Sensory Audit app with video and text input",
              "7-network sensory profiling system",
              "Brain demo with per-timestep interpretation",
              "Technical paper updated with real FDR numbers and honest limitations",
              "Public roadmap page with CPU vs GPU tracks",
              "NDA, SPARK, UK Biobank applications submitted",
              "Three apps deployed: mind.new, neuro.mind.new, sensory.mind.new",
            ]} />

            <ProgressGroup title="In Progress" color="yellow" items={[
              "Clinical guardrails — disclaimer added, full ethics documentation pending",
              "Per-site preprocessing documentation",
            ]} />

            <ProgressGroup title="Not Started (CPU)" color="purple" items={[
              "5-minute individual calibration module",
              "Behavioral validation study protocol",
              "Network-level CI propagation in frontend charts",
            ]} />

            <ProgressGroup title="Blocked on GPU" color="red" items={[
              "LoRA fine-tuning on ASD task fMRI",
              "Infant/toddler developmental encoders",
              "Brain→behavior inverse pipeline",
              "Multi-condition expansion (ADHD, SPD, anxiety)",
              "End-to-end Bayesian uncertainty",
            ]} />

            <ProgressGroup title="Pending External" color="muted" items={[
              "NDA dataset access approval",
              "SPARK dataset access approval",
              "GPU compute allocation",
              "IRB approval for validation study",
              "Clinical partner for ADOS-2 trials",
            ]} />
          </div>
        </div>
      </S>

      {/* Directive */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="card p-6 border-l-2 border-[var(--accent)]">
            <p className="text-[10px] text-[var(--accent)] font-medium tracking-widest uppercase mb-3">Chief Scientist Directive</p>
            <p className="text-[14px] text-[var(--text)] leading-relaxed font-light italic">
              &ldquo;Do the CPU work first. Clean statistics, age stratification, calibration, and behavioral validation will tell you whether the signal is real. Only then spend GPU budget to replace the statistical transform with a learned model. Otherwise you are training a bigger network on a noisy map.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProgressGroup({ title, color, items }: { title: string; color: string; items: string[] }) {
  const dotColor = color === "green" ? "bg-green-400" : color === "yellow" ? "bg-yellow-400" : color === "purple" ? "bg-[var(--accent)]" : color === "red" ? "bg-red-400" : "bg-[var(--muted)]";
  return (
    <div>
      <h3 className="text-[14px] font-medium mb-3 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
        {title}
        <span className="text-[11px] text-[var(--muted)] font-light">({items.length})</span>
      </h3>
      <div className="space-y-1.5 ml-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <span className={`w-1 h-1 rounded-full ${dotColor} mt-1.5 flex-shrink-0 opacity-50`} />
            <p className="text-[12px] text-[var(--muted)] font-light">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  const [s, setS] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const h = () => setS(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const links = [
    { href: "/", label: "Home" },
    { href: "/paper", label: "Paper" },
    { href: "https://neuro.mind.new", label: "NeuroBrain" },
    { href: "https://sensory.mind.new", label: "Sensory Audit" },
  ];
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${s || open ? "bg-[#050507]/80 backdrop-blur-xl border-b border-[var(--border)]" : ""}`}>
      <div className="max-w-[900px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1">
          <img src="/brainlogo.png" alt="" className="h-7 w-7 object-contain" />
          <span className="text-[20px] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
            <span className="gradient-text">mind</span>
            <span className="text-[#52525b]" style={{ fontStyle: "normal" }}>.</span>
            <span className="text-[#d4d4d8] font-light">new</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-[13px] text-[var(--muted)]">
          {links.map((l) => <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>)}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[12px] px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">Roadmap</span>
          <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 transition" aria-label="Menu">
            {open ? (
              <svg className="w-5 h-5 text-[var(--text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5 text-[var(--text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[#050507]/95 backdrop-blur-xl">
          <div className="max-w-[900px] mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[14px] text-[var(--muted)] hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition font-light">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-5 px-6">
      <div className="max-w-[900px] mx-auto flex items-center justify-between text-[11px] text-[var(--muted)]">
        <span>Mind.new by Leeza Care Research &amp; Development Foundation</span>
        <a href="/" className="hover:text-white transition">Home</a>
      </div>
    </footer>
  );
}
