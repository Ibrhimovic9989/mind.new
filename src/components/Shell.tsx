"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as "dark" | "light" | null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition text-[var(--muted)] hover:text-[var(--text)]">
      {theme === "dark" ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      )}
    </button>
  );
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/explorer", label: "Explorer" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/paper", label: "Paper" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/faq", label: "FAQ" },
];

const PRODUCT_LINKS = [
  { href: "https://neuro.mind.new", label: "NeuroBrain" },
  { href: "https://sensory.mind.new", label: "Sensory Audit" },
  { href: "https://neuro.mind.new/passport", label: "Sensory Passport" },
];

const ABOUT_LINKS = [
  { href: "/team", label: "Team" },
  { href: "/waitlist", label: "Waitlist" },
  { href: "/updates", label: "Updates" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteNav({ current, maxWidth = "1024px" }: { current?: string; maxWidth?: string }) {
  const [s, setS] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setS(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const allLinks = [...NAV_LINKS.filter(l => l.label !== current), ...PRODUCT_LINKS.slice(0, 2)];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${s || open ? "bg-[#050507]/80 backdrop-blur-xl border-b border-[var(--border)]" : ""}`}>
      <div className={`mx-auto px-6 h-14 flex items-center justify-between`} style={{ maxWidth }}>
        <a href="/" className="flex items-center gap-1">
          <img src="/brainlogo.png" alt="" className="h-7 w-7 object-contain" />
          <span className="text-[20px] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
            <span className="gradient-text">mind</span>
            <span className="text-[#52525b]" style={{ fontStyle: "normal" }}>.</span>
            <span className="text-[#d4d4d8] font-light">new</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-5 text-[12px] text-[var(--muted)]">
          {allLinks.slice(0, 6).map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {current && <span className="text-[12px] px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">{current}</span>}
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
          <div className={`mx-auto px-6 py-4 flex flex-col gap-1`} style={{ maxWidth }}>
            {[...NAV_LINKS, ...PRODUCT_LINKS, ...ABOUT_LINKS].map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-[14px] text-[var(--muted)] hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition font-light">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter({ maxWidth = "1024px" }: { maxWidth?: string }) {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className={`mx-auto px-6 py-10`} style={{ maxWidth }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1 mb-3">
              <img src="/brainlogo.png" alt="" className="h-6 w-6 object-contain" />
              <span className="text-[16px] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
                <span className="gradient-text">mind</span>
                <span className="text-[#52525b]" style={{ fontStyle: "normal" }}>.</span>
                <span className="text-[#d4d4d8] font-light">new</span>
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] leading-relaxed font-light">
              AI foundation model for the neurodiverse brain. Built by Leeza Care.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] text-[var(--muted)] tracking-widest uppercase mb-3 font-medium">Research</h4>
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.slice(1).map(l => (
                <a key={l.href} href={l.href} className="text-[12px] text-[var(--text)] hover:text-[var(--accent)] transition font-light">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] text-[var(--muted)] tracking-widest uppercase mb-3 font-medium">Products</h4>
            <div className="flex flex-col gap-1.5">
              {PRODUCT_LINKS.map(l => (
                <a key={l.href} href={l.href} className="text-[12px] text-[var(--text)] hover:text-[var(--accent)] transition font-light">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] text-[var(--muted)] tracking-widest uppercase mb-3 font-medium">About</h4>
            <div className="flex flex-col gap-1.5">
              {ABOUT_LINKS.map(l => (
                <a key={l.href} href={l.href} className="text-[12px] text-[var(--text)] hover:text-[var(--accent)] transition font-light">{l.label}</a>
              ))}
              <a href="mailto:ibrahim.raza@leeza.app" className="text-[12px] text-[var(--text)] hover:text-[var(--accent)] transition font-light">Contact</a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[10px] text-[var(--muted)]/60 leading-relaxed font-light max-w-md">
            AQAL is a research tool, not a diagnostic medical device. Predictions are population-level estimates. If concerned about a child, consult a developmental pediatrician.
          </p>
          <p className="text-[10px] text-[var(--muted)]">© 2026 Leeza Care R&amp;D Foundation</p>
        </div>
      </div>
    </footer>
  );
}
