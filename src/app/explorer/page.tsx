"use client";

import { useState, useEffect, useRef } from "react";

const NETWORKS = [
  { id: "Default", label: "Default Mode", color: "#22c55e", count: 421, desc: "Self-reflection, mind-wandering, social thinking. The brain's 'idle mode' that's actually doing deep internal processing." },
  { id: "SomMot", label: "Somatomotor", color: "#ec4899", count: 298, desc: "Movement and body awareness. Controls physical coordination, motor planning, and body sensation." },
  { id: "DorsAttn", label: "Dorsal Attention", color: "#f59e0b", count: 286, desc: "Focus and concentration. Top-down attention — voluntarily directing focus toward something." },
  { id: "Vis", label: "Visual", color: "#ef4444", count: 242, desc: "Processing what you see. From basic shapes to complex scene understanding." },
  { id: "SalVentAttn", label: "Salience", color: "#7c6aff", count: 227, desc: "Filtering what matters. Decides what's important vs background — the brain's priority system." },
  { id: "Limbic", label: "Limbic", color: "#ff6b6b", count: 154, desc: "Emotion and reward. Processes feelings, emotional memories, and motivation." },
  { id: "Cont", label: "Control", color: "#06b6d4", count: 147, desc: "Planning and decision-making. Executive function — switching between tasks, inhibiting impulses." },
];

const PAIRS = [
  { from: "Default", to: "DorsAttn", count: 92, avg_t: -3.39, meaning: "The connection between internal thought and focused attention is weaker in autistic brains. This may explain difficulty switching from internal processing to external demands — like being deeply in thought and struggling to shift when called." },
  { from: "Default", to: "Default", count: 90, avg_t: -3.48, meaning: "Internal connections within the Default Mode Network itself are altered. This affects self-referential thinking, theory of mind (understanding others' perspectives), and autobiographical memory." },
  { from: "SomMot", to: "SomMot", count: 69, avg_t: -3.49, meaning: "Motor regions communicate differently within themselves. This relates to motor coordination, body awareness, and repetitive movements (stimming) commonly seen in autism." },
  { from: "SomMot", to: "Vis", count: 68, avg_t: -3.1, meaning: "The link between seeing and moving is altered. This affects visually-guided actions — reaching for objects, navigating spaces, and eye-hand coordination." },
  { from: "Default", to: "SomMot", count: 65, avg_t: -3.46, meaning: "The bridge between internal thought and physical movement is different. May relate to the feeling of being 'in your head' and disconnected from your body." },
  { from: "Cont", to: "Default", count: 54, avg_t: -3.22, meaning: "The switch between executive control and default mode is altered. The NT brain smoothly toggles between 'doing' and 'resting' — this transition is less fluid in ASD." },
  { from: "DorsAttn", to: "Vis", count: 49, avg_t: -3.34, meaning: "The connection between attention and vision is different. Autistic individuals may attend to visual details differently — noticing things others miss, or finding it hard to filter visual clutter." },
  { from: "DorsAttn", to: "SalVentAttn", count: 44, avg_t: -3.26, meaning: "Two attention systems communicate differently. Top-down (what you choose to focus on) vs bottom-up (what grabs your attention) are less coordinated." },
  { from: "Default", to: "SalVentAttn", count: 44, avg_t: -3.2, meaning: "The salience network helps decide what's important. Altered connection to DMN means the brain may not prioritize social signals the way NT brains do." },
  { from: "Default", to: "Vis", count: 41, avg_t: -2.91, meaning: "Internal thought and visual processing are linked differently. May relate to vivid visual imagination or difficulty separating internal imagery from external perception." },
  { from: "DorsAttn", to: "SomMot", count: 41, avg_t: -3.17, meaning: "Attention-to-movement connection is altered. Affects the ability to attend to physical tasks and coordinate intentional movement." },
  { from: "SalVentAttn", to: "Vis", count: 35, avg_t: -3.25, meaning: "Visual salience filtering is different. The brain may not automatically de-prioritize visual noise, making busy environments feel overwhelming." },
  { from: "Default", to: "Limbic", count: 35, avg_t: -3.15, meaning: "Emotion and self-reflection are connected differently. May contribute to experiencing emotions more intensely or having difficulty identifying one's own emotional state (alexithymia)." },
  { from: "SalVentAttn", to: "SomMot", count: 31, avg_t: -3.29, meaning: "The body's alertness response to salient stimuli is altered. Relates to physical stress responses — tensing up, flinching, or needing to move in response to sensory input." },
  { from: "Cont", to: "Limbic", count: 30, avg_t: -3.23, meaning: "Executive control over emotions is wired differently. May relate to emotional regulation challenges — difficulty calming down after becoming upset." },
];

export default function ExplorerPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const filteredPairs = selected
    ? PAIRS.filter(p => p.from === selected || p.to === selected)
    : PAIRS;

  const selectedNet = NETWORKS.find(n => n.id === selected);

  return (
    <main>
      <Nav />
      <section className="pt-24 pb-8 px-6">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase">Interactive</span>
          </div>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] font-medium mb-4">
            Connectivity <span className="gradient-text">Explorer</span>
          </h1>
          <p className="text-[15px] text-[var(--muted)] leading-relaxed font-light max-w-lg mb-8">
            Click any brain network to see which connections are affected in autism and what it means. Based on 1,002 FDR-corrected findings from 1,545 brain scans.
          </p>

          {/* Network selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button onClick={() => setSelected(null)}
              className={`text-[12px] px-3 py-1.5 rounded-full transition ${!selected ? "bg-white text-[#050507] font-medium" : "border border-[var(--border)] text-[var(--muted)] hover:text-white"}`}>
              All networks
            </button>
            {NETWORKS.map(net => (
              <button key={net.id} onClick={() => setSelected(selected === net.id ? null : net.id)}
                className={`text-[12px] px-3 py-1.5 rounded-full transition flex items-center gap-1.5 ${selected === net.id ? "text-white font-medium" : "border border-[var(--border)] text-[var(--muted)] hover:text-white"}`}
                style={selected === net.id ? { background: net.color + "22", borderColor: net.color + "44", color: net.color } : {}}>
                <span className="w-2 h-2 rounded-full" style={{ background: net.color }} />
                {net.label}
                <span className="text-[10px] opacity-60">{net.count}</span>
              </button>
            ))}
          </div>

          {/* Selected network info */}
          {selectedNet && (
            <div className="card p-5 mb-6" style={{ borderColor: selectedNet.color + "33" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full" style={{ background: selectedNet.color }} />
                <h2 className="text-[16px] font-medium">{selectedNet.label} Network</h2>
                <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: selectedNet.color + "15", color: selectedNet.color }}>{selectedNet.count} connections</span>
              </div>
              <p className="text-[13px] text-[var(--muted)] font-light leading-relaxed">{selectedNet.desc}</p>
            </div>
          )}

          {/* Connection pairs */}
          <div className="space-y-3">
            {filteredPairs.map((pair, i) => {
              const fromNet = NETWORKS.find(n => n.id === pair.from);
              const toNet = NETWORKS.find(n => n.id === pair.to);
              const isSelf = pair.from === pair.to;
              return (
                <div key={i} className="card p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: fromNet?.color }} />
                      <span className="text-[13px] font-medium">{fromNet?.label}</span>
                      {!isSelf && (
                        <>
                          <span className="text-[var(--muted)] text-[11px]">↔</span>
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: toNet?.color }} />
                          <span className="text-[13px] font-medium">{toNet?.label}</span>
                        </>
                      )}
                      {isSelf && <span className="text-[11px] text-[var(--muted)]">(within network)</span>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">{pair.count} connections</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[var(--muted)]">avg t = {pair.avg_t}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${pair.avg_t < 0 ? "bg-blue-500/10 text-blue-400" : "bg-red-500/10 text-red-400"}`}>
                        {pair.avg_t < 0 ? "weaker in ASD" : "stronger in ASD"}
                      </span>
                    </div>
                  </div>
                  <p className="text-[12px] text-[var(--text)] leading-relaxed font-light">{pair.meaning}</p>
                  {/* Strength bar */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-[9px] text-[var(--muted)]">Strength</span>
                    <div className="flex-1 h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(pair.count / 92) * 100}%`, background: `linear-gradient(90deg, ${fromNet?.color}, ${toNet?.color})` }} />
                    </div>
                    <span className="text-[9px] text-[var(--muted)] tabular-nums">{pair.count}/92</span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPairs.length === 0 && selected && (
            <div className="card p-8 text-center">
              <p className="text-[14px] text-[var(--muted)]">No significant connections found for this network filter.</p>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-[var(--border)] py-5 px-6 mt-16">
        <div className="max-w-[1024px] mx-auto flex items-center justify-between text-[11px] text-[var(--muted)]">
          <span>Mind.new by Leeza Care</span>
          <a href="/" className="hover:text-white transition">Home</a>
        </div>
      </footer>
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050507]/80 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="max-w-[1024px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1">
          <img src="/brainlogo.png" alt="" className="h-7 w-7 object-contain" />
          <span className="text-[20px] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
            <span className="gradient-text">mind</span><span className="text-[#52525b]" style={{ fontStyle: "normal" }}>.</span><span className="text-[#d4d4d8] font-light">new</span>
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a href="/" className="text-[12px] text-[var(--muted)] hover:text-white transition">Home</a>
          <span className="text-[12px] px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">Explorer</span>
        </div>
      </div>
    </nav>
  );
}
