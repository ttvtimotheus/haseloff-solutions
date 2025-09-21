import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    {
      url: `${base}/`,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/impressum`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/datenschutz`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/kontakt`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
