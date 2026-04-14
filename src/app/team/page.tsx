"use client";

import { SiteNav, SiteFooter } from "@/components/Shell";

export default function TeamPage() {
  return (
    <main>
      <SiteNav current="Team" />
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

          <div className="space-y-6">
            {[
              {
                name: "Meraj Faheem",
                role: "Director, Leeza Care R&D Foundation",
                photo: "/team/meraj.jpg",
                linkedin: "https://www.linkedin.com/in/merajf/",
                bio: "Serial entrepreneur with deep expertise in scaling technology ventures from zero to market. CEO of EdVenture Park — India's first student-focused startup incubator (200+ ideas incubated, 11 startups funded). Founded The Hacking School, India's first coding bootcamp (acquired by iCollege, 2020). Postgraduate in Clinical Research from NIMS and MA in Psychology from IGNOU. Mentor at Atal Innovation Mission. Brings a decade of experience across edtech, fintech, and healthtech to Leeza Care's neurodiversity mission.",
                expertise: ["Venture building & scaling", "Clinical research methodology", "Startup incubation (200+ ideas)", "Edtech & healthtech", "Psychology & behavioral science"],
              },
              {
                name: "Ibrahim Raza",
                role: "Director & CEO, Leeza Care R&D Foundation",
                photo: "/team/ibrahim.jpg",
                linkedin: "https://www.linkedin.com/in/mohammed-ibrahim-raza-2a560b248",
                bio: "Founder and CEO of Leeza Care, leading the development of AQAL and the company's neurodiversity mission. Concurrently serves as CTO at Finacra.com (fintech) and SuperAccountant.in (accounting automation), where he architects and ships production platforms end-to-end. Youth Council Member at Social Impact Award, supporting young social entrepreneurs across India. CS graduate with applied AI/ML experience spanning brain encoding models, fintech systems, and SaaS product engineering.",
                expertise: ["Founder & CEO, Leeza Care", "CTO, Finacra.com", "CTO, SuperAccountant.in", "Youth Council, Social Impact Award", "Applied AI/ML & product engineering"],
              },
            ].map((person) => (
              <div key={person.name} className="card p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <img src={person.photo} alt={person.name} className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border border-[var(--border)] flex-shrink-0" />
                  <div className="flex-1">
                    <h2 className="text-[18px] font-medium mb-0.5">{person.name}</h2>
                    <p className="text-[13px] text-[var(--accent)] font-light mb-3">{person.role}</p>
                    <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light mb-4">{person.bio}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {person.expertise.map(e => (
                        <span key={e} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[var(--muted)]">{e}</span>
                      ))}
                    </div>
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-[12px] text-[var(--accent)] hover:text-white transition flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-6 mt-6 text-center">
            <h3 className="text-[14px] font-medium mb-2">Built at</h3>
            <p className="text-[18px] font-medium gradient-text mb-2">Leeza Care</p>
            <p className="text-[12px] text-[var(--muted)] font-light">Research &amp; Development Foundation</p>
            <p className="text-[12px] text-[var(--muted)] font-light mt-3 max-w-md mx-auto">Incubated at EdVenture Park, Hyderabad. Building technology for neurodiversity awareness, accessibility, and inclusion.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://leeza.app" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[var(--accent)] hover:text-white transition">leeza.app</a>
              <a href="https://www.edventurepark.com" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[var(--muted)] hover:text-white transition">EdVenture Park</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
