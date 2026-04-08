"use client";

import { useRef, useState, useEffect } from "react";

const TIMESTAMPS = [
  { t: 0, label: "Door opens", stress: "low" },
  { t: 1, label: "Students revealed", stress: "moderate" },
  { t: 2, label: "Teacher talking", stress: "moderate" },
  { t: 3, label: "Students moving", stress: "moderate" },
  { t: 4, label: "Movement intensifies", stress: "high" },
  { t: 5, label: "Boy runs to desk", stress: "high" },
  { t: 6, label: "Shouting begins", stress: "high" },
  { t: 7, label: "Voices overlap", stress: "high" },
  { t: 8, label: "Students jumping", stress: "high" },
  { t: 9, label: "Sensory overload", stress: "high" },
  { t: 10, label: "Overwhelmed", stress: "high" },
];

export default function BrainDemo() {
  const ntRef = useRef<HTMLVideoElement>(null);
  const ndRef = useRef<HTMLVideoElement>(null);
  const clipRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"nt" | "nd" | "compare">("compare");
  const [mobileTab, setMobileTab] = useState<"stimulus" | "brain">("stimulus");
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  const currentTs = TIMESTAMPS[Math.min(Math.floor(currentTime / 1.17), TIMESTAMPS.length - 1)];

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

  return (
    <div className="card p-3 sm:p-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div>
          <div className="text-[9px] sm:text-[10px] text-[var(--accent)] font-medium tracking-widest uppercase">Live Demo</div>
          <h3 className="text-[13px] sm:text-[16px] font-medium text-white">See Cortex in Action</h3>
        </div>
        <div className="flex gap-1 p-0.5 rounded-lg bg-white/[0.03] border border-[var(--border)]">
          {[{ id: "nt" as const, l: "NT" }, { id: "nd" as const, l: "ND" }, { id: "compare" as const, l: "Both" }].map((m) => (
            <button key={m.id} onClick={() => setMode(m.id)}
              className={`text-[10px] px-2 py-1 rounded transition ${mode === m.id ? "bg-white/10 text-white" : "text-[var(--muted)]"}`}>
              {m.l}
            </button>
          ))}
        </div>
      </div>

      {/* All videos always rendered (for refs to work) — visibility controlled by CSS */}
      {/* MOBILE TAB SWITCHER */}
      <div className="md:hidden flex gap-1 p-0.5 rounded-lg bg-white/[0.03] border border-[var(--border)] mb-2">
        <button onClick={() => setMobileTab("stimulus")}
          className={`flex-1 text-[10px] py-1 rounded transition ${mobileTab === "stimulus" ? "bg-white/10 text-white" : "text-[var(--muted)]"}`}>
          Stimulus
        </button>
        <button onClick={() => setMobileTab("brain")}
          className={`flex-1 text-[10px] py-1 rounded transition ${mobileTab === "brain" ? "bg-white/10 text-white" : "text-[var(--muted)]"}`}>
          Brain Activity
        </button>
      </div>

      {/* Stimulus video — visible on mobile when tab=stimulus, always on desktop */}
      <div className={`mb-2 md:mb-3 ${mobileTab === "stimulus" ? "block" : "hidden md:block"}`}>
        <div className="hidden md:block text-[9px] text-[var(--muted)] font-medium mb-1">Stimulus</div>
        <div className="md:grid md:grid-cols-3 md:gap-2">
          <div className="rounded-md overflow-hidden bg-black aspect-video">
            <video ref={clipRef} src="/demo/classroom.mp4" className="w-full h-full object-cover" playsInline loop preload="metadata" />
          </div>
          {/* Desktop: NT brain inline */}
          <div className={`hidden ${mode === "nt" || mode === "compare" ? "md:block" : ""}`}>
            <div className="text-[9px] text-[var(--accent)] font-medium mb-1 mt-2 md:mt-0">Neurotypical</div>
            <div className="rounded-md overflow-hidden bg-black aspect-video">
              <video ref={ntRef} src="/demo/brain_demo_nt.mp4" className="w-full h-full object-contain" muted playsInline loop preload="metadata" onEnded={() => setPlaying(false)} />
            </div>
          </div>
          {/* Desktop: ND brain inline */}
          <div className={`hidden ${mode === "nd" || mode === "compare" ? "md:block" : ""}`}>
            <div className="text-[9px] text-[var(--accent2)] font-medium mb-1 mt-2 md:mt-0">Neurodiverse</div>
            <div className="rounded-md overflow-hidden bg-black aspect-video">
              <video ref={ndRef} src="/demo/brain_demo_nd.mp4" className="w-full h-full object-contain" muted playsInline loop preload="metadata" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only brain view */}
      <div className={`md:hidden mb-2 ${mobileTab === "brain" ? "block" : "hidden"}`}>
        <div className={`grid gap-1.5 ${mode === "compare" ? "grid-cols-2" : "grid-cols-1"}`}>
          {(mode === "nt" || mode === "compare") && (
            <div className="rounded-md overflow-hidden bg-black aspect-video relative">
              {/* Mobile NT - mirrors desktop NT via ref-share isn't possible, use second video */}
              <video src="/demo/brain_demo_nt.mp4" className="w-full h-full object-contain" muted playsInline loop preload="metadata"
                ref={(el) => {
                  if (el) {
                    // Sync to current time on visibility
                    const sync = () => { if (ntRef.current) el.currentTime = ntRef.current.currentTime; };
                    sync();
                    el.addEventListener("loadedmetadata", sync);
                  }
                }} />
              <span className="absolute top-1 left-1 text-[8px] px-1.5 py-0.5 rounded bg-black/60 text-[var(--accent)]">NT</span>
            </div>
          )}
          {(mode === "nd" || mode === "compare") && (
            <div className="rounded-md overflow-hidden bg-black aspect-video relative">
              <video src="/demo/brain_demo_nd.mp4" className="w-full h-full object-contain" muted playsInline loop preload="metadata"
                ref={(el) => {
                  if (el) {
                    const sync = () => { if (ndRef.current) el.currentTime = ndRef.current.currentTime; };
                    sync();
                    el.addEventListener("loadedmetadata", sync);
                  }
                }} />
              <span className="absolute top-1 left-1 text-[8px] px-1.5 py-0.5 rounded bg-black/60 text-[var(--accent2)]">ND</span>
            </div>
          )}
        </div>
      </div>

      {/* Current event + stress */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="text-[10px] sm:text-[11px] text-white font-medium truncate flex-1">{currentTs?.label}</div>
        <span className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
          currentTs?.stress === "high" ? "bg-red-500/15 text-red-400" : currentTs?.stress === "moderate" ? "bg-yellow-500/15 text-yellow-400" : "bg-green-500/15 text-green-400"
        }`}>{currentTs?.stress}</span>
      </div>

      {/* Timeline */}
      <div className="flex items-end gap-[2px] h-5 mb-3">
        {TIMESTAMPS.map((ts, i) => (
          <button key={i} onClick={() => syncSeek(i * 1.17)}
            className="flex-1 rounded-sm transition-all hover:opacity-80"
            style={{
              height: ts.stress === "high" ? "100%" : ts.stress === "moderate" ? "60%" : "30%",
              background: ts.stress === "high" ? "#ef4444" : ts.stress === "moderate" ? "#f59e0b" : "#22c55e",
              opacity: Math.floor(currentTime / 1.17) === i ? 1 : 0.35,
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        <button onClick={() => { syncSeek(0); syncPlay(); }} className="text-[10px] sm:text-[11px] px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-white transition">Restart</button>
        <button onClick={playing ? syncPause : syncPlay} className="text-[10px] sm:text-[11px] px-5 py-1.5 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition">
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
