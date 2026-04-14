"use client";

import { SiteNav, SiteFooter } from "@/components/Shell";

const USE_CASES = [
  {
    audience: "For Schools",
    icon: "🎓",
    color: "#7c6aff",
    tagline: "Design classrooms that work for every student",
    scenarios: [
      { title: "Classroom Sensory Audit", desc: "Upload a short walkthrough video of your classroom. Get a second-by-second map of sensory stress moments — flickering lights, overlapping voices, cluttered visuals — with specific recommendations to fix them before students arrive." },
      { title: "Student Sensory Passports", desc: "Help parents create portable Sensory Passports for their children. Teachers see exactly which environments a student finds overwhelming and can plan accommodations proactively." },
      { title: "IEP & 504 Support", desc: "Use AQAL's network-level profiles as quantitative evidence for Individualized Education Plans. Show administrators why specific accommodations are neurologically grounded, not arbitrary." },
    ],
  },
  {
    audience: "For Clinics",
    icon: "🏥",
    color: "#22c55e",
    tagline: "Explain sensory differences to parents and patients",
    scenarios: [
      { title: "Parent Education", desc: "Show parents visually what sensory overload looks like in the brain. Compare neurotypical vs neurodiverse responses to the same stimulus — it makes abstract concepts concrete and relatable." },
      { title: "Waiting Room Design", desc: "Audit your waiting rooms, exam rooms, and hallways. Many clinical environments are inadvertently hostile to the exact patients they serve. Get targeted fixes: lighting, acoustic treatment, visual simplification." },
      { title: "Communication Aid", desc: "Not a diagnostic replacement for ADOS-2 or ADI-R, but a powerful communication tool to help families understand clinical findings and treatment plans." },
    ],
  },
  {
    audience: "For Architects & Designers",
    icon: "🏛️",
    color: "#f59e0b",
    tagline: "Build inclusive spaces from day one",
    scenarios: [
      { title: "Pre-Construction Auditing", desc: "Render a 3D walkthrough of your design, feed it through Sensory Audit, and identify sensory red flags before construction. Far cheaper than retrofitting." },
      { title: "Retail & Hospitality", desc: "Malls, hotels, restaurants, airports — any public space. Neurodiverse customers represent 15-20% of your user base. Audit your environment and capture an underserved market." },
      { title: "Healthcare Facilities", desc: "Hospitals are notorious for sensory hostility. Use AQAL to score emergency rooms, pediatric wings, and imaging suites. Generate data-backed renovation priorities." },
    ],
  },
  {
    audience: "For Researchers",
    icon: "🔬",
    color: "#06b6d4",
    tagline: "Accelerate your neurodiversity research",
    scenarios: [
      { title: "Stimulus Design", desc: "Before running expensive fMRI studies, use AQAL to predict which stimuli will produce the largest NT-ND divergence. Optimize your experimental design on the cheap." },
      { title: "Hypothesis Generation", desc: "Explore connectivity patterns across 1,002 FDR-corrected connections. Use our interactive explorer to identify network-level hypotheses worth testing in wet-lab studies." },
      { title: "Educational Materials", desc: "Generate publication-quality brain visualizations for papers, talks, and teaching. Our brain prediction endpoints output standard formats." },
      { title: "API Access", desc: "Non-commercial research access to our API is free. Request access via the waitlist." },
    ],
  },
  {
    audience: "For Parents & Caregivers",
    icon: "👨‍👩‍👧",
    color: "#ec4899",
    tagline: "Advocate for your child with data",
    scenarios: [
      { title: "Create a Sensory Passport", desc: "A 5-minute questionnaire produces a shareable profile showing your child's sensory sensitivities across 7 brain networks. Share the link with teachers, therapists, or relatives." },
      { title: "Explain to Family", desc: "Help grandparents or siblings understand why your child finds certain environments overwhelming. The visual brain maps make sensory processing differences tangible." },
      { title: "Prepare for New Environments", desc: "Before a new school, daycare, or family trip — audit the environment via Sensory Audit. Know what to expect, plan accommodations, reduce meltdown risk." },
    ],
  },
  {
    audience: "For Developers",
    icon: "💻",
    color: "#ff6b6b",
    tagline: "Build inclusive products",
    scenarios: [
      { title: "UI/UX Accessibility", desc: "Run screen recordings through Sensory Audit to find overwhelming UI patterns — aggressive animations, dense layouts, notification bombardment. Iterate toward neurodiverse-friendly design." },
      { title: "API Integration", desc: "Embed AQAL predictions in your own apps. Health tech, ed tech, HR tech — anywhere sensory profiles or neurodiversity awareness adds value." },
      { title: "Enterprise Sensory Audits", desc: "Offer sensory audit as a service for your corporate clients. Workplace inclusion programs are growing rapidly — AQAL gives you a differentiated product." },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <main>
      <SiteNav current="Use Cases" />
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[960px] mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase">Use Cases</span>
          </div>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] font-medium mb-4">
            Built for <span className="gradient-text">everyone</span>
          </h1>
          <p className="text-[15px] text-[var(--muted)] leading-relaxed font-light mb-12 max-w-xl">
            Whether you&apos;re a teacher designing a classroom, a parent advocating for your child, or a researcher studying autism — AQAL meets you where you are.
          </p>

          <div className="space-y-4">
            {USE_CASES.map(uc => (
              <div key={uc.audience} className="card p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-[32px] flex-shrink-0">{uc.icon}</div>
                  <div>
                    <h2 className="text-[20px] font-medium mb-1" style={{ color: uc.color }}>{uc.audience}</h2>
                    <p className="text-[13px] text-[var(--muted)] font-light">{uc.tagline}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {uc.scenarios.map(s => (
                    <div key={s.title} className="bg-[var(--bg)] rounded-lg p-4 border border-[var(--border)]">
                      <h3 className="text-[13px] font-medium mb-2">{s.title}</h3>
                      <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card p-6 mt-8 text-center">
            <h3 className="text-[16px] font-medium mb-2">Ready to try?</h3>
            <p className="text-[13px] text-[var(--muted)] font-light mb-5">Join the waitlist for early access, or try our live tools right now.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/waitlist" className="text-[13px] px-5 py-2 rounded-full bg-white text-[#050507] font-medium hover:bg-white/90 transition">Join Waitlist</a>
              <a href="https://sensory.mind.new" className="text-[13px] px-5 py-2 rounded-full border border-white/10 text-[var(--muted)] hover:text-white transition">Try Sensory Audit</a>
              <a href="https://neuro.mind.new/passport" className="text-[13px] px-5 py-2 rounded-full border border-white/10 text-[var(--muted)] hover:text-white transition">Create Passport</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
