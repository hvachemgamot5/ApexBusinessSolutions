import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://apex-business-solutions.vercel.app/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://apex-business-solutions.vercel.app/quickbooks-bookkeeping",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://apex-business-solutions.vercel.app/xero-bookkeeping",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
