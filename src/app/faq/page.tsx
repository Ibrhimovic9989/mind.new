"use client";

import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/Shell";

const FAQS = [
  {
    cat: "Basics",
    items: [
      { q: "What is AQAL?", a: "AQAL is a foundation AI model that predicts how neurodiverse (autistic) brains respond to sensory stimuli — text, audio, and video. It maps brain activity across 20,484 cortical points in real time, trained on 1,545 fMRI scans across 36 clinical sites." },
      { q: "Is this a diagnosis tool?", a: "No. AQAL is a research and accessibility tool, not a diagnostic medical device. It does not diagnose autism or any other condition. Predictions are population-level statistical estimates. If you're concerned about yourself or a child, please consult a developmental pediatrician or qualified clinician." },
      { q: "Who built this?", a: "Leeza Care Research & Development Foundation, incubated at EdVenture Park (Hyderabad, India). Built by Ibrahim Raza (Founder & CEO) and Meraj Faheem (Director). See the team page for more." },
      { q: "Is AQAL free to use?", a: "Yes, our web tools (NeuroBrain, Sensory Audit, Sensory Passport) are free to use. We're building toward institutional partnerships and API access for schools, clinics, and researchers." },
    ],
  },
  {
    cat: "Accuracy & Science",
    items: [
      { q: "How accurate is AQAL?", a: "AQAL identifies 1,002 FDR-corrected significant connections (q < 0.05) — meaning we have high confidence in these findings. 73 survive the strictest Bonferroni correction. But accuracy is population-level, not individual-level. For any given person, predictions should be interpreted as trends rather than precise facts." },
      { q: "What does 'FDR-corrected' mean?", a: "FDR (False Discovery Rate) is a statistical filter that ensures at most 5% of our findings are false alarms. When you test 4,950 brain connections, hundreds will look significant by chance alone. FDR removes that noise so what remains is reliable." },
      { q: "What datasets do you use?", a: "Two large multi-site autism neuroimaging consortia totaling 1,545 subjects across 36 clinical sites. All data is publicly available, de-identified, and collected under IRB-approved protocols at the original institutions." },
      { q: "Can I read the technical paper?", a: "Yes — see our full technical paper at mind.new/paper. It includes methodology, limitations, and honest critique of what AQAL can and cannot do." },
    ],
  },
  {
    cat: "Use Cases",
    items: [
      { q: "Can I use this for my child?", a: "The Sensory Passport is designed to help parents and caregivers articulate sensory needs to schools, therapists, and family. It is not a diagnostic tool. For clinical decisions, always consult professionals." },
      { q: "Can schools use this?", a: "Yes. Use the Sensory Audit to evaluate classrooms, cafeterias, and hallways for sensory load. Use Sensory Passports to personalize accommodations for individual students." },
      { q: "Can clinicians use this?", a: "Yes, as a communication aid — to show parents what sensory processing differences might look like for their child. Not as a diagnostic replacement for ADOS-2, ADI-R, or other clinical instruments." },
      { q: "Can researchers use this?", a: "Yes. Our API is free for non-commercial research. Join the waitlist for API access. We welcome collaboration — see mind.new/team." },
      { q: "Can architects/designers use this?", a: "Yes. Upload a video walkthrough of a space; the Sensory Audit returns a timeline of sensory stress moments with recommendations. Useful for hospitals, schools, workplaces, retail environments." },
    ],
  },
  {
    cat: "Privacy & Data",
    items: [
      { q: "Is my data safe?", a: "Yes. Videos are processed in memory and deleted after the session. We don't store uploaded content. Text inputs are not stored. Calibration data stays in your browser unless you explicitly save a Sensory Passport. See our full Privacy Policy at mind.new/privacy." },
      { q: "Do you train on my data?", a: "No. Your inputs are never used to retrain our models. AQAL is trained only on publicly available research datasets." },
      { q: "Who can see my Sensory Passport?", a: "Only people you share the link with. Passports are not indexed or publicly listed. You control who sees them." },
      { q: "Can I delete my data?", a: "Yes. Most data isn't stored to begin with. For Sensory Passports, delete the link and it's gone. For waitlist emails, contact ibrahim.raza@leeza.app." },
    ],
  },
  {
    cat: "Technical",
    items: [
      { q: "Does this require a brain scan?", a: "No — that's the whole point. AQAL predicts brain activity from everyday inputs (text, audio, video) using population-level data, so individuals don't need expensive fMRI scans." },
      { q: "Does it run on GPU?", a: "No. AQAL inference runs entirely on CPU — about 20-30 seconds end-to-end. This makes it deployable on standard cloud infrastructure, not requiring expensive GPU clusters." },
      { q: "What's the technical architecture?", a: "A 177M-parameter multimodal transformer encoder predicts neurotypical cortical activity, followed by a statistical neurodiverse transform derived from population-level connectivity differences. Full details at mind.new/paper." },
      { q: "Is there an API?", a: "Yes, currently in closed beta. Join the waitlist at mind.new/waitlist for access." },
    ],
  },
  {
    cat: "Limitations",
    items: [
      { q: "What AQAL can't do", a: "AQAL cannot diagnose, cannot predict individual trajectories, and cannot replace clinical assessment. It's a population-level statistical tool for accessibility design and research — not medicine." },
      { q: "Why 0 connections for young children?", a: "Our analysis of 548 children under 12 found 0 FDR-corrected connections, meaning connectivity differences in young kids are too subtle for our statistical approach. Early detection will require GPU fine-tuning and task-evoked (not resting-state) fMRI — both on our roadmap." },
      { q: "What about non-autistic neurodivergence?", a: "Currently AQAL focuses on autism. ADHD, sensory processing disorder, anxiety, and other conditions are on our roadmap but require additional data and GPU compute." },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main>
      <SiteNav current="FAQ" />
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[760px] mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase">FAQ</span>
          </div>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] font-medium mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-[15px] text-[var(--muted)] leading-relaxed font-light mb-12 max-w-lg">
            Common questions about AQAL, how it works, privacy, and what it can (and can&apos;t) do.
          </p>

          <div className="space-y-10">
            {FAQS.map(cat => (
              <div key={cat.cat}>
                <h2 className="text-[11px] text-[var(--accent)] font-medium tracking-widest uppercase mb-3">{cat.cat}</h2>
                <div className="space-y-2">
                  {cat.items.map(item => {
                    const key = cat.cat + item.q;
                    const isOpen = open === key;
                    return (
                      <div key={key} className="card">
                        <button onClick={() => setOpen(isOpen ? null : key)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4">
                          <span className="text-[14px] font-medium">{item.q}</span>
                          <svg className={`w-4 h-4 text-[var(--muted)] transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5">
                            <p className="text-[13px] text-[var(--muted)] leading-relaxed font-light">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="card p-5 mt-10 text-center">
            <p className="text-[13px] text-[var(--muted)] font-light mb-2">Still have a question?</p>
            <a href="mailto:ibrahim.raza@leeza.app" className="text-[13px] text-[var(--accent)] hover:text-white transition">ibrahim.raza@leeza.app</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
