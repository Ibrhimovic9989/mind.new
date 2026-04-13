"use client";

export default function PrivacyPage() {
  return (
    <main>
      <Nav />
      <article className="max-w-[760px] mx-auto px-6 pt-28 pb-24">
        <h1 className="text-[28px] tracking-tight font-medium mb-2">Privacy Policy &amp; Terms of Use</h1>
        <p className="text-[12px] text-[var(--muted)] mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-[14px] text-[var(--text)] font-light leading-[1.85]">
          <Sec title="1. What AQAL Is">
            <p>AQAL is a research tool for accessibility design and neurodiversity awareness, developed by Leeza Care Research &amp; Development Foundation. It is <strong className="text-white font-normal">not a diagnostic medical device</strong>. It does not diagnose, treat, or screen for any condition. Predictions are population-level statistical estimates derived from publicly available neuroimaging datasets.</p>
          </Sec>

          <Sec title="2. What We Do Not Do">
            <ul className="list-disc list-inside space-y-1.5">
              <li>We do not diagnose autism or any other condition</li>
              <li>We do not provide medical advice</li>
              <li>We do not store individual brain scans or personal health information</li>
              <li>We do not sell data to third parties</li>
              <li>We do not use your input data to retrain our models</li>
            </ul>
          </Sec>

          <Sec title="3. Data Collection">
            <p><strong className="text-white font-normal">Sensory Audit:</strong> If you upload a video, it is processed in memory on our Azure VM and deleted after the session. We do not store uploaded videos.</p>
            <p className="mt-2"><strong className="text-white font-normal">Text Input:</strong> Text submitted for brain prediction is processed in memory and not stored.</p>
            <p className="mt-2"><strong className="text-white font-normal">Calibration:</strong> Sensory calibration ratings are processed client-side in your browser. No data is sent to our servers unless you explicitly choose to save a Sensory Passport.</p>
            <p className="mt-2"><strong className="text-white font-normal">Waitlist:</strong> If you submit your email via the waitlist form, we store it solely to contact you about AQAL availability. We do not share it.</p>
          </Sec>

          <Sec title="4. Training Data">
            <p>AQAL&apos;s neurodiverse transform is trained on de-identified, publicly available fMRI datasets (1,545 subjects from two multi-site consortia). No individual can be identified from our model outputs. All training data was collected under IRB-approved protocols at the original institutions.</p>
          </Sec>

          <Sec title="5. Sensory Passport">
            <p>If you create a Sensory Passport, you choose whether to make it public (accessible via a shareable link) or keep it private. Public passports display only the sensory profile you created — no personal health information. You can delete your passport at any time.</p>
          </Sec>

          <Sec title="6. Clinical Disclaimer">
            <p>AQAL predictions are based on group-level statistics, not individual brain scans. They should never replace professional assessment. If you are concerned about yourself or a child, please consult a developmental pediatrician, psychologist, or other qualified clinician. Our tool is designed to help architects, educators, and designers create more accessible spaces — not to make clinical determinations.</p>
          </Sec>

          <Sec title="7. Children">
            <p>AQAL is not intended for use by children. The Sensory Passport and calibration tools are designed for adults or for caregivers acting on behalf of a child under professional guidance.</p>
          </Sec>

          <Sec title="8. Cookies &amp; Analytics">
            <p>We use minimal analytics (Vercel Analytics) to understand page traffic. No personal data is collected. No advertising cookies are used.</p>
          </Sec>

          <Sec title="9. Open Science">
            <p>Our methodology, statistical corrections, and limitations are published openly at <a href="/paper" className="text-[var(--accent)] hover:text-white transition">mind.new/paper</a> and <a href="/roadmap" className="text-[var(--accent)] hover:text-white transition">mind.new/roadmap</a>. We believe transparency is essential for trust in AI-driven neuroscience tools.</p>
          </Sec>

          <Sec title="10. Contact">
            <p>For questions about privacy, data handling, or to request deletion of any data:</p>
            <p className="mt-1"><a href="mailto:ibrahim.raza@leeza.app" className="text-[var(--accent)] hover:text-white transition">ibrahim.raza@leeza.app</a></p>
          </Sec>
        </div>
      </article>

      <footer className="border-t border-[var(--border)] py-5 px-6">
        <div className="max-w-[760px] mx-auto flex items-center justify-between text-[11px] text-[var(--muted)]">
          <span>Leeza Care Research &amp; Development Foundation</span>
          <a href="/" className="hover:text-white transition">Home</a>
        </div>
      </footer>
    </main>
  );
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[16px] font-medium text-white mb-3">{title}</h2>
      {children}
    </section>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050507]/80 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="max-w-[760px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1">
          <img src="/brainlogo.png" alt="" className="h-7 w-7 object-contain" />
          <span className="text-[20px] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
            <span className="gradient-text">mind</span><span className="text-[#52525b]" style={{ fontStyle: "normal" }}>.</span><span className="text-[#d4d4d8] font-light">new</span>
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a href="/" className="text-[12px] text-[var(--muted)] hover:text-white transition">Home</a>
          <span className="text-[12px] px-2.5 py-1 rounded-full bg-white/5 text-[var(--muted)]">Privacy</span>
        </div>
      </div>
    </nav>
  );
}
