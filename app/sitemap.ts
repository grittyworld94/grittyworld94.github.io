import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://grittyworld94.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE}/privacy/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
