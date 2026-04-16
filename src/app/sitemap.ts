import type { MetadataRoute } from "next";
import { legalSlugs } from "@/shared/content/legal";
import { posts } from "@/shared/content/posts";
import { site } from "@/shared/config/site";
import { solutions } from "@/shared/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  for (const s of solutions) {
    entries.push({
      url: `${site.url}/solutions/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const p of posts) {
    entries.push({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  for (const slug of legalSlugs) {
    entries.push({
      url: `${site.url}/legal/${slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    });
  }

  return entries;
}
