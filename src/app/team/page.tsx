"use client";

export default function TeamPage() {
  return (
    <main>
      <Nav />
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase">Team</span>
          </div>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] font-medium mb-4">
            The people behind <span className="gradient-text">AQAL</span>
          </h1>
          <p className="text-[15px] text-[var(--muted)] leading-relaxed font-light max-w-lg mb-12">
            Building foundation models for neurodiversity research at Leeza Care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Ibrahim Raza",
                role: "Founder & Lead Researcher",
                linkedin: "https://www.linkedin.com/in/mohammed-ibrahim-raza-2a560b248",
                bio: "Leads the development of AQAL — from model architecture to deployment. Built the multimodal brain encoder, the ABIDE connectivity pipeline, and the FDR-corrected statistical framework. Previously focused on AI applications in healthcare accessibility.",
                focus: ["Brain encoding architecture", "Connectivity analysis", "API & infrastructure"],
              },
              {
                name: "Meraj Faheem",
                role: "Co-Researcher",
                linkedin: "https://www.linkedin.com/in/merajf/",
                bio: "Contributes to AQAL's neuroscience foundations and clinical translation strategy. Focused on bridging the gap between computational predictions and real-world accessibility applications for schools and clinics.",
                focus: ["Clinical translation", "Accessibility applications", "Research methodology"],
              },
            ].map((person) => (
              <div key={person.name} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center text-white text-[16px] font-semibold">
                    {person.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h2 className="text-[15px] font-medium">{person.name}</h2>
                    <p className="text-[12px] text-[var(--accent)] font-light">{person.role}</p>
                  </div>
                </div>
                <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light mb-4">{person.bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {person.focus.map(f => (
                    <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[var(--muted)]">{f}</span>
                  ))}
                </div>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-[12px] text-[var(--accent)] hover:text-white transition flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>

          <div className="card p-6 mt-6 text-center">
            <h3 className="text-[14px] font-medium mb-2">Built at</h3>
            <p className="text-[18px] font-medium gradient-text mb-2">Leeza Care</p>
            <p className="text-[12px] text-[var(--muted)] font-light">Research &amp; Development Foundation</p>
            <p className="text-[12px] text-[var(--muted)] font-light mt-2">Building technology for neurodiversity awareness, accessibility, and inclusion.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] py-5 px-6">
        <div className="max-w-[800px] mx-auto flex items-center justify-between text-[11px] text-[var(--muted)]">
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
      <div className="max-w-[800px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1">
          <img src="/brainlogo.png" alt="" className="h-7 w-7 object-contain" />
          <span className="text-[20px] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
            <span className="gradient-text">mind</span><span className="text-[#52525b]" style={{ fontStyle: "normal" }}>.</span><span className="text-[#d4d4d8] font-light">new</span>
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a href="/" className="text-[12px] text-[var(--muted)] hover:text-white transition">Home</a>
          <span className="text-[12px] px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">Team</span>
        </div>
      </div>
    </nav>
  );
}
