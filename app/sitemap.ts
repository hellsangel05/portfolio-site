import type { MetadataRoute } from "next";
import { projects } from "./data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-site-green-xi.vercel.app";
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/resume`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
