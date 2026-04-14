"use client";

import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/Shell";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, mailto — in future, send to a backend/Airtable/Google Sheet
    const subject = encodeURIComponent("AQAL Waitlist: " + org);
    const body = encodeURIComponent(`Email: ${email}\nOrganization: ${org}\nRole: ${role}\nInterest: ${interest}`);
    window.open(`mailto:ibrahim.raza@leeza.app?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <main>
      <SiteNav current="Waitlist" />
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[600px] mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase">Early Access</span>
          </div>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] font-medium mb-4">
            Join the <span className="gradient-text">Waitlist</span>
          </h1>
          <p className="text-[15px] text-[var(--muted)] leading-relaxed font-light mb-10">
            Be among the first schools, clinics, and researchers to use AQAL for sensory accessibility design and neurodiversity research.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[12px] text-[var(--muted)] mb-1.5 block">Email *</label>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@organization.com"
                  className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg p-3 text-[14px] font-light focus:outline-none focus:border-[var(--accent)]/30 transition" />
              </div>
              <div>
                <label className="text-[12px] text-[var(--muted)] mb-1.5 block">Organization *</label>
                <input type="text" required value={org} onChange={e => setOrg(e.target.value)}
                  placeholder="School name, clinic, university, company..."
                  className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg p-3 text-[14px] font-light focus:outline-none focus:border-[var(--accent)]/30 transition" />
              </div>
              <div>
                <label className="text-[12px] text-[var(--muted)] mb-1.5 block">Your role</label>
                <select value={role} onChange={e => setRole(e.target.value)}
                  className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg p-3 text-[14px] font-light focus:outline-none focus:border-[var(--accent)]/30 transition">
                  <option value="">Select...</option>
                  <option value="educator">Educator / Teacher</option>
                  <option value="school_admin">School Administrator</option>
                  <option value="clinician">Clinician / Therapist</option>
                  <option value="researcher">Researcher</option>
                  <option value="architect">Architect / Designer</option>
                  <option value="parent">Parent / Caregiver</option>
                  <option value="developer">Developer</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-[12px] text-[var(--muted)] mb-1.5 block">What are you most interested in?</label>
                <select value={interest} onChange={e => setInterest(e.target.value)}
                  className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg p-3 text-[14px] font-light focus:outline-none focus:border-[var(--accent)]/30 transition">
                  <option value="">Select...</option>
                  <option value="sensory_audit">Sensory space auditing</option>
                  <option value="brain_prediction">Brain activity prediction</option>
                  <option value="sensory_passport">Sensory Passport for students</option>
                  <option value="research">Research collaboration</option>
                  <option value="api">API integration</option>
                  <option value="therapy_tracking">Therapy progress tracking</option>
                  <option value="all">Everything</option>
                </select>
              </div>
              <button type="submit"
                className="w-full py-3 rounded-lg bg-white text-[#050507] font-medium text-[13px] hover:bg-white/90 transition mt-2">
                Join Waitlist
              </button>
              <p className="text-[10px] text-[var(--muted)]/50 text-center font-light">
                We&apos;ll only contact you about AQAL. No spam. <a href="/privacy" className="text-[var(--accent)] hover:text-white transition">Privacy Policy</a>
              </p>
            </form>
          ) : (
            <div className="card p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-[18px] font-medium mb-2">You&apos;re on the list</h2>
              <p className="text-[13px] text-[var(--muted)] font-light">We&apos;ll reach out when AQAL is ready for {role === "educator" ? "schools" : role === "clinician" ? "clinics" : "your use case"}.</p>
              <a href="/" className="inline-block mt-6 text-[13px] px-5 py-2 rounded-full border border-white/10 text-[var(--muted)] hover:text-white transition">Back to Home</a>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
