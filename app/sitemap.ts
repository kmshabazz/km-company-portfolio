import type { MetadataRoute } from "next";

const baseUrl = "https://www.kmandcompany.com";
const caseStudySlugs = ["open-enrollment-campaign-2026", "shabazz-seafood", "yippee-tv", "travel-her-way", "kali-luxe"];

export default function sitemap(): MetadataRoute.Sitemap {
 return [
  { url: baseUrl, changeFrequency: "monthly", priority: 1 },
  ...caseStudySlugs.map((slug) => ({ url: `${baseUrl}/work/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
 ];
}
