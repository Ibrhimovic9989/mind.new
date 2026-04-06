"use client";

import { useRef, useState, useEffect } from "react";

const STIMULUS = "A child walks into a noisy classroom with fluorescent lights buzzing and thirty children shouting and laughing while a teacher speaks loudly over the noise";

const TIMESTAMPS = [
  { t: 0, label: "Entering the space", stress: "low" },
  { t: 1, label: "Fluorescent lights detected", stress: "moderate" },
  { t: 2, label: "Buzzing sound registers", stress: "moderate" },
  { t: 3, label: "Children shouting begins", stress: "high" },
  { t: 4, label: "Multiple voices overlap", stress: "high" },
  { t: 5, label: "Visual clutter increases", stress: "high" },
  { t: 6, label: "Teacher speaking loudly", stress: "high" },
  { t: 7, label: "Noise peaks", stress: "high" },
  { t: 8, label: "Sensory overload zone", stress: "high" },
  { t: 9, label: "Processing overwhelm", stress: "high" },
  { t: 10, label: "Sustained stress", stress: "high" },
];

export default function BrainDemo() {
  const ntRef = useRef<HTMLVideoElement>(null);
  const ndRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"nt" | "nd" | "compare">("compare");
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

  const syncPlay = () => {
    ntRef.current?.play();
    ndRef.current?.play();
    setPlaying(true);
  };

  const syncPause = () => {
    ntRef.current?.pause();
    ndRef.current?.pause();
    setPlaying(false);
  };

  const syncSeek = (t: number) => {
    if (ntRef.current) ntRef.current.currentTime = t;
    if (ndRef.current) ndRef.current.currentTime = t;
  };

  const restart = () => {
    syncSeek(0);
    syncPlay();
  };

  return (
    <div className="card p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-[11px] text-[var(--accent)] font-medium mb-1 tracking-widest uppercase">Live Demo</div>
          <h3 className="text-[18px] font-medium text-white">See Cortex in Action</h3>
        </div>
        {/* Mode toggle */}
        <div className="flex gap-1 p-1 rounded-lg bg-white/[0.03] border border-[var(--border)]">
          {[
            { id: "nt" as const, label: "Neurotypical" },
            { id: "nd" as const, label: "Neurodiverse" },
            { id: "compare" as const, label: "Compare" },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`text-[11px] px-3 py-1.5 rounded transition ${
                mode === m.id ? "bg-white/10 text-white" : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stimulus text */}
      <div className="p-3 rounded-lg bg-white/[0.02] border border-[var(--border)] mb-6">
        <div className="text-[10px] text-[var(--muted)] mb-1">Stimulus</div>
        <p className="text-[13px] text-[var(--text)] font-light leading-relaxed">{STIMULUS}</p>
      </div>

      {/* Brain videos */}
      <div className={`grid gap-4 mb-4 ${mode === "compare" ? "grid-cols-2" : "grid-cols-1"}`}>
        {(mode === "nt" || mode === "compare") && (
          <div>
            <div className="text-[10px] text-[var(--accent)] font-medium mb-2 text-center">
              Neurotypical Brain
            </div>
            <div className="rounded-lg overflow-hidden bg-black">
              <video
                ref={ntRef}
                src="/demo/brain_demo_nt.mp4"
                className="w-full"
                muted
                playsInline
                loop
                onEnded={() => setPlaying(false)}
              />
            </div>
          </div>
        )}
        {(mode === "nd" || mode === "compare") && (
          <div>
            <div className="text-[10px] text-[var(--accent2)] font-medium mb-2 text-center">
              Neurodiverse Brain (ASD)
            </div>
            <div className="rounded-lg overflow-hidden bg-black">
              <video
                ref={ndRef}
                src="/demo/brain_demo_nd.mp4"
                className="w-full"
                muted
                playsInline
                loop
              />
            </div>
          </div>
        )}
      </div>

      {/* Current activity indicator */}
      <div className="flex items-center justify-between mb-4 p-3 rounded-lg bg-white/[0.02] border border-[var(--border)]">
        <div>
          <div className="text-[10px] text-[var(--muted)]">Current event</div>
          <div className="text-[13px] text-white font-medium">{currentTs?.label}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[10px] text-[var(--muted)]">Sensory load</div>
          <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
            currentTs?.stress === "high"
              ? "bg-red-500/15 text-red-400"
              : currentTs?.stress === "moderate"
                ? "bg-yellow-500/15 text-yellow-400"
                : "bg-green-500/15 text-green-400"
          }`}>
            {currentTs?.stress}
          </span>
        </div>
      </div>

      {/* Activity bar legend */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] text-[var(--muted)]">Low</span>
        <div className="flex-1 h-2 rounded-full" style={{
          background: "linear-gradient(90deg, #1a1a2e, #ff4500, #ff8c00, #ffd700, #ffffff)",
        }} />
        <span className="text-[10px] text-[var(--muted)]">High</span>
        <span className="text-[10px] text-[var(--muted)] ml-2">Activity</span>
      </div>

      {/* Timeline */}
      <div className="flex items-end gap-[2px] h-8 mb-2">
        {TIMESTAMPS.map((ts, i) => (
          <button
            key={i}
            onClick={() => syncSeek(i * 1.17)}
            className="flex-1 rounded-sm transition-all hover:opacity-80"
            style={{
              height: ts.stress === "high" ? "100%" : ts.stress === "moderate" ? "60%" : "30%",
              background: ts.stress === "high" ? "#ef4444" : ts.stress === "moderate" ? "#f59e0b" : "#22c55e",
              opacity: Math.floor(currentTime / 1.17) === i ? 1 : 0.4,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-[var(--muted)] mb-4">
        <span>0s</span>
        <span>{TIMESTAMPS.length}s</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <button onClick={restart} className="text-[12px] px-4 py-2 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-white hover:border-white/20 transition">
          Restart
        </button>
        <button
          onClick={playing ? syncPause : syncPlay}
          className="text-[12px] px-6 py-2 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition"
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      <p className="text-[10px] text-[var(--muted)] text-center mt-4 font-light">
        Real predictions from Cortex v0.1 — trained on 933 brain recordings across 20 research sites
      </p>
    </div>
  );
}
