"use client";

import { useRef, useState, useEffect } from "react";

const TIMESTAMPS = [
  {
    t: 0, label: "Door opens", stress: "low",
    divergence: 12, peakNetwork: "Visual", peakPct: 18,
    networks: { visual: 18, auditory: 8, salience: 10, motor: 5, social: 7, default_mode: 6 },
    interpretation: "Low sensory load. The visual cortex registers the door opening — both NT and ND brains respond similarly at this point. Minimal divergence.",
  },
  {
    t: 1, label: "Students revealed", stress: "moderate",
    divergence: 34, peakNetwork: "Visual", peakPct: 48,
    networks: { visual: 48, auditory: 15, salience: 32, motor: 12, social: 28, default_mode: 14 },
    interpretation: "Visual complexity spikes as the room of students becomes visible. The ND brain shows 48% higher visual cortex activation — it processes each face and object individually rather than filtering the scene as a whole.",
  },
  {
    t: 2, label: "Teacher talking", stress: "moderate",
    divergence: 38, peakNetwork: "Auditory", peakPct: 52,
    networks: { visual: 35, auditory: 52, salience: 38, motor: 10, social: 30, default_mode: 18 },
    interpretation: "The teacher's voice competes with background chatter. The ND auditory cortex shows 52% divergence — both the voice and ambient noise are processed at equal priority, making it harder to isolate the speaker.",
  },
  {
    t: 3, label: "Students moving", stress: "moderate",
    divergence: 42, peakNetwork: "Salience", peakPct: 55,
    networks: { visual: 44, auditory: 38, salience: 55, motor: 20, social: 35, default_mode: 15 },
    interpretation: "The salience network diverges at 55% — the ND brain struggles to decide what's important. Movement from multiple students triggers competing attention signals that the NT brain filters out automatically.",
  },
  {
    t: 4, label: "Movement intensifies", stress: "high",
    divergence: 58, peakNetwork: "Salience", peakPct: 68,
    networks: { visual: 55, auditory: 45, salience: 68, motor: 35, social: 42, default_mode: 22 },
    interpretation: "Multiple students moving simultaneously. The ND salience network is now 68% divergent — every movement registers as potentially important. The motor cortex also activates, triggering a physical stress response (fidgeting, tension).",
  },
  {
    t: 5, label: "Boy runs to desk", stress: "high",
    divergence: 65, peakNetwork: "Motor", peakPct: 72,
    networks: { visual: 60, auditory: 48, salience: 65, motor: 72, social: 45, default_mode: 28 },
    interpretation: "Sudden fast movement triggers the ND motor cortex at 72% divergence. The brain mirrors the running action involuntarily — this can cause a flinch response or the urge to move. The NT brain registers it as background motion.",
  },
  {
    t: 6, label: "Shouting begins", stress: "high",
    divergence: 74, peakNetwork: "Auditory", peakPct: 85,
    networks: { visual: 58, auditory: 85, salience: 72, motor: 48, social: 55, default_mode: 32 },
    interpretation: "Auditory cortex diverges to 85%. Shouting is processed at nearly full intensity by the ND brain — there's no volume attenuation for expected classroom noise. This is the point where many autistic individuals would cover their ears.",
  },
  {
    t: 7, label: "Voices overlap", stress: "high",
    divergence: 78, peakNetwork: "Auditory", peakPct: 88,
    networks: { visual: 55, auditory: 88, salience: 75, motor: 42, social: 62, default_mode: 35 },
    interpretation: "Multiple overlapping voices. The ND auditory cortex hits 88% divergence — each voice is processed as a separate, equally loud stream. The social network also spikes as the brain tries to decode who's speaking to whom.",
  },
  {
    t: 8, label: "Students jumping", stress: "high",
    divergence: 82, peakNetwork: "Visual", peakPct: 90,
    networks: { visual: 90, auditory: 82, salience: 80, motor: 65, social: 58, default_mode: 38 },
    interpretation: "Visual cortex reaches 90% divergence. Fast, unpredictable whole-body movements from multiple students create a visual processing overload. Combined with sustained high auditory load, this is approaching sensory saturation.",
  },
  {
    t: 9, label: "Sensory overload", stress: "high",
    divergence: 88, peakNetwork: "Salience", peakPct: 92,
    networks: { visual: 88, auditory: 85, salience: 92, motor: 70, social: 65, default_mode: 45 },
    interpretation: "The salience network hits 92% — the brain can no longer prioritize any single input. All sensory channels are near maximum divergence simultaneously. This is the neural signature of sensory overload: every input feels equally urgent and overwhelming.",
  },
  {
    t: 10, label: "Overwhelmed", stress: "high",
    divergence: 91, peakNetwork: "Default Mode", peakPct: 78,
    networks: { visual: 82, auditory: 80, salience: 88, motor: 68, social: 70, default_mode: 78 },
    interpretation: "The default mode network surges to 78% — the brain shifts toward internal processing as a protective response. This is 'shutdown mode': the person may appear withdrawn or unresponsive while their brain attempts to recover from sustained overload.",
  },
];

const NETWORK_COLORS: Record<string, string> = {
  visual: "#ef4444", auditory: "#f59e0b", salience: "#7c6aff",
  motor: "#06b6d4", social: "#ec4899", default_mode: "#22c55e",
};

const NETWORK_LABELS: Record<string, string> = {
  visual: "Visual", auditory: "Auditory", salience: "Salience",
  motor: "Motor", social: "Social", default_mode: "Default Mode",
};

export default function BrainDemo() {
  const ntRef = useRef<HTMLVideoElement>(null);
  const ndRef = useRef<HTMLVideoElement>(null);
  const clipRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"nt" | "nd" | "compare">("compare");
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  const tsIndex = Math.min(Math.floor(currentTime / 1.17), TIMESTAMPS.length - 1);
  const currentTs = TIMESTAMPS[tsIndex];

  useEffect(() => {
    const nt = ntRef.current;
    if (!nt) return;
    const h = () => setCurrentTime(nt.currentTime);
    nt.addEventListener("timeupdate", h);
    return () => nt.removeEventListener("timeupdate", h);
  }, []);

  const syncPlay = async () => {
    try {
      await Promise.all([ntRef.current?.play(), ndRef.current?.play(), clipRef.current?.play()]);
      setPlaying(true);
    } catch (e) { console.error(e); }
  };
  const syncPause = () => {
    ntRef.current?.pause(); ndRef.current?.pause(); clipRef.current?.pause();
    setPlaying(false);
  };
  const syncSeek = (t: number) => {
    if (ntRef.current) ntRef.current.currentTime = t;
    if (ndRef.current) ndRef.current.currentTime = t;
    if (clipRef.current) clipRef.current.currentTime = t;
  };

  const numCols = mode === "compare" ? 3 : 2;

  return (
    <div className="card p-2.5 sm:p-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
        <div>
          <div className="text-[8px] sm:text-[10px] text-[var(--accent)] font-medium tracking-widest uppercase">Live Demo</div>
          <h3 className="text-[12px] sm:text-[16px] font-medium text-white">See AQAL in Action</h3>
        </div>
        <div className="flex gap-0.5 sm:gap-1 p-0.5 rounded-lg bg-white/[0.03] border border-[var(--border)]">
          {[{ id: "nt" as const, l: "NT" }, { id: "nd" as const, l: "ND" }, { id: "compare" as const, l: "Both" }].map((m) => (
            <button key={m.id} onClick={() => setMode(m.id)}
              className={`text-[9px] sm:text-[11px] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded transition ${mode === m.id ? "bg-white/10 text-white" : "text-[var(--muted)]"}`}>
              {m.l}
            </button>
          ))}
        </div>
      </div>

      {/* Videos */}
      <div className="grid gap-1.5 sm:gap-2 mb-2 sm:mb-3" style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}>
        <div>
          <div className="text-[8px] sm:text-[9px] text-[var(--muted)] font-medium mb-0.5 sm:mb-1">Stimulus</div>
          <div className="rounded overflow-hidden bg-black aspect-video">
            <video ref={clipRef} src="/demo/classroom.mp4" className="w-full h-full object-cover" playsInline loop preload="metadata" />
          </div>
        </div>
        {(mode === "nt" || mode === "compare") && (
          <div>
            <div className="text-[8px] sm:text-[9px] text-[var(--accent)] font-medium mb-0.5 sm:mb-1">Neurotypical</div>
            <div className="rounded overflow-hidden bg-black aspect-video">
              <video ref={ntRef} src="/demo/brain_demo_nt.mp4" className="w-full h-full object-contain" muted playsInline loop preload="metadata" onEnded={() => setPlaying(false)} />
            </div>
          </div>
        )}
        {(mode === "nd" || mode === "compare") && (
          <div>
            <div className="text-[8px] sm:text-[9px] text-[var(--accent2)] font-medium mb-0.5 sm:mb-1">Neurodiverse</div>
            <div className="rounded overflow-hidden bg-black aspect-video">
              <video ref={ndRef} src="/demo/brain_demo_nd.mp4" className="w-full h-full object-contain" muted playsInline loop preload="metadata" />
            </div>
          </div>
        )}
      </div>

      {/* Event + stress badge */}
      <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
        <div className="text-[10px] sm:text-[11px] text-white font-medium truncate flex-1">{currentTs?.label}</div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[8px] sm:text-[10px] text-[var(--muted)] font-mono">{currentTs.divergence}% divergence</span>
          <span className={`text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium ${
            currentTs?.stress === "high" ? "bg-red-500/15 text-red-400" : currentTs?.stress === "moderate" ? "bg-yellow-500/15 text-yellow-400" : "bg-green-500/15 text-green-400"
          }`}>{currentTs?.stress}</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex items-end gap-[2px] h-4 sm:h-5 mb-2 sm:mb-3">
        {TIMESTAMPS.map((ts, i) => (
          <button key={i} onClick={() => syncSeek(i * 1.17)}
            className="flex-1 rounded-sm transition-all hover:opacity-80"
            style={{
              height: ts.stress === "high" ? "100%" : ts.stress === "moderate" ? "60%" : "30%",
              background: ts.stress === "high" ? "#ef4444" : ts.stress === "moderate" ? "#f59e0b" : "#22c55e",
              opacity: tsIndex === i ? 1 : 0.35,
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
        <button onClick={() => { syncSeek(0); syncPlay(); }} className="text-[10px] sm:text-[11px] px-3 py-1 sm:py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-white transition">Restart</button>
        <button onClick={playing ? syncPause : syncPlay} className="text-[10px] sm:text-[11px] px-4 sm:px-5 py-1 sm:py-1.5 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition">
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      {/* ─── Interpretation Panel ─── */}
      <div className="border-t border-[var(--border)] pt-4 sm:pt-5">
        {/* Divergence headline */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center" style={{ background: currentTs.stress === "high" ? "rgba(239,68,68,0.1)" : currentTs.stress === "moderate" ? "rgba(245,158,11,0.1)" : "rgba(34,197,94,0.1)" }}>
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke={currentTs.stress === "high" ? "#ef4444" : currentTs.stress === "moderate" ? "#f59e0b" : "#22c55e"} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] sm:text-[11px] text-[var(--muted)]">
              Peak: <strong className="text-white font-normal">{currentTs.peakNetwork}</strong> at <strong className="text-white font-normal">{currentTs.peakPct}%</strong> divergence
            </div>
            <div className="text-[9px] sm:text-[10px] text-[var(--muted)]/70">t = {currentTs.t}s &middot; Overall {currentTs.divergence}% NT–ND divergence</div>
          </div>
        </div>

        {/* Network bars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mb-4 sm:mb-5">
          {Object.entries(currentTs.networks).map(([key, val]) => (
            <div key={key}>
              <div className="flex justify-between text-[9px] sm:text-[10px] mb-0.5">
                <span className="text-[var(--muted)] font-light">{NETWORK_LABELS[key]}</span>
                <span style={{ color: NETWORK_COLORS[key] }} className="font-medium tabular-nums">{val}%</span>
              </div>
              <div className="w-full h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${val}%`, background: NETWORK_COLORS[key] }} />
              </div>
            </div>
          ))}
        </div>

        {/* Interpretation text */}
        <div className="bg-[var(--bg)] rounded-lg p-3 sm:p-4 border border-[var(--border)]">
          <div className="flex items-start gap-2">
            <svg className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[11px] sm:text-[12px] text-[var(--text)] leading-relaxed font-light">{currentTs.interpretation}</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 sm:mt-4">
          {Object.entries(NETWORK_LABELS).map(([key, label]) => (
            <span key={key} className="flex items-center gap-1 text-[8px] sm:text-[9px] text-[var(--muted)]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: NETWORK_COLORS[key] }} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
