"use client";

import { SiteNav, SiteFooter } from "@/components/Shell";

const UPDATES = [
  {
    date: "2026-04-14",
    version: "v0.3",
    title: "Connectivity Explorer, Team page, FAQ, Use Cases",
    highlights: [
      "Interactive connectivity explorer at /explorer — click any network to see which connections are affected",
      "Full team page with Meraj Faheem and Ibrahim Raza bios",
      "FAQ page answering common questions",
      "Use Cases page for schools, clinics, architects, researchers, parents, developers",
      "Privacy Policy and Terms of Use published",
      "Sensory Passport shareable as link and downloadable as image",
    ],
  },
  {
    date: "2026-04-12",
    version: "v0.3 (statistics)",
    title: "Dual-consortium training — 1,545 subjects, 1,002 FDR connections",
    highlights: [
      "Expanded training corpus to 1,545 subjects across 36 clinical sites",
      "1,002 FDR-corrected connections (up from 387 in v0.2) — 2.6x improvement",
      "73 connections survive Bonferroni correction",
      "Age-stratified: 49 adolescent connections, 0 adults, 1 child (<12 still insufficient)",
      "Connectivity heatmaps published on landing page",
      "Terminology cards explaining connections, networks, t-statistics, FDR",
    ],
  },
  {
    date: "2026-04-10",
    version: "v0.2",
    title: "FDR correction, site harmonization, uncertainty quantification",
    highlights: [
      "Implemented FDR (Benjamini-Hochberg) correction addressing reviewer feedback",
      "Site harmonization via residualization across 20 clinical sites",
      "Age and sex as covariates in statistical tests",
      "200-iteration bootstrap 95% confidence intervals per vertex",
      "Age-stratified transforms (child / adolescent / adult)",
      "Published honest limitations section acknowledging statistical weaknesses",
    ],
  },
  {
    date: "2026-04-08",
    version: "Feedback integration",
    title: "Expert review and honest self-critique",
    highlights: [
      "Received detailed expert feedback identifying statistical weaknesses",
      "Published comprehensive roadmap at /roadmap with CPU vs GPU tracks",
      "Paper updated with honest 'Limitations & Critique' section",
      "Chief Scientist directive: fix CPU science first, then GPU fine-tuning",
    ],
  },
  {
    date: "2026-04-05",
    version: "v0.1",
    title: "Initial public release",
    highlights: [
      "177M-parameter brain encoder deployed on CPU (20-30s inference)",
      "Three apps launched: mind.new, neuro.mind.new, sensory.mind.new",
      "Real-time brain prediction, NT vs ND comparison, connectivity analysis",
      "Sensory Audit for physical space accessibility",
      "Interactive brain demo with 11-timestep interpretation",
      "Technical paper and roadmap published",
    ],
  },
];

export default function UpdatesPage() {
  return (
    <main>
      <SiteNav current="Updates" />
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[760px] mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase">Updates</span>
          </div>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] font-medium mb-4">
            What&apos;s new in <span className="gradient-text">AQAL</span>
          </h1>
          <p className="text-[15px] text-[var(--muted)] leading-relaxed font-light mb-4 max-w-lg">
            Progress log. Every version, every feature, every honest finding.
          </p>
          <div className="flex items-center gap-4 mb-12">
            <a href="/rss.xml" className="text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795 0 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/></svg>
              RSS feed
            </a>
          </div>

          <div className="space-y-6">
            {UPDATES.map((u, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">{u.version}</span>
                  <span className="text-[11px] text-[var(--muted)]">{u.date}</span>
                </div>
                <h2 className="text-[16px] font-medium mb-4">{u.title}</h2>
                <ul className="space-y-2">
                  {u.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--muted)] mt-2 flex-shrink-0" />
                      <span className="text-[13px] text-[var(--muted)] font-light leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
