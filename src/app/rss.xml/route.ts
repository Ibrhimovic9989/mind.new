const UPDATES = [
  { date: "2026-04-14", version: "v0.3", title: "Connectivity Explorer, Team page, FAQ, Use Cases", desc: "Added interactive connectivity explorer, full team profiles, FAQ, use cases page, and privacy policy. Sensory Passport now supports shareable links and image downloads." },
  { date: "2026-04-12", version: "v0.3 (stats)", title: "Dual-consortium training — 1,545 subjects, 1,002 FDR connections", desc: "Expanded corpus to 1,545 subjects across 36 sites. 1,002 FDR-corrected connections — 2.6x improvement over v0.2. Age-stratified analysis shows 49 adolescent, 0 adult, 1 child (insufficient <12)." },
  { date: "2026-04-10", version: "v0.2", title: "FDR correction, site harmonization, uncertainty", desc: "Addressed reviewer feedback with FDR correction, site harmonization, age/sex covariates, and 200-iteration bootstrap CIs. Age-stratified transforms. Honest limitations section." },
  { date: "2026-04-08", version: "Review", title: "Expert review and self-critique", desc: "Published comprehensive roadmap splitting CPU and GPU work. Paper updated with limitations section. Chief Scientist directive to fix CPU science before GPU fine-tuning." },
  { date: "2026-04-05", version: "v0.1", title: "Initial public release", desc: "177M-parameter brain encoder deployed on CPU. Three apps launched. Real-time brain prediction, NT vs ND comparison, Sensory Audit, interactive brain demo." },
];

export async function GET() {
  const items = UPDATES.map(u => `
    <item>
      <title>${u.title} (${u.version})</title>
      <link>https://mind.new/updates</link>
      <description><![CDATA[${u.desc}]]></description>
      <pubDate>${new Date(u.date).toUTCString()}</pubDate>
      <guid>https://mind.new/updates#${u.version}-${u.date}</guid>
    </item>
  `).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>mind.new — AQAL Updates</title>
    <link>https://mind.new/updates</link>
    <description>Progress updates for AQAL, the AI foundation model for the neurodiverse brain.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
