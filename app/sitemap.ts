import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://apex-business-solutions.vercel.app/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
