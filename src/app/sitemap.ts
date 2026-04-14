import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mind.new";
  const pages = ["", "/paper", "/roadmap", "/explorer", "/use-cases", "/faq", "/team", "/privacy", "/waitlist", "/updates"];
  return pages.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
