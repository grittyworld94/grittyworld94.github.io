import type { MetadataRoute } from "next";

import { APPS } from "@/app/links";

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
    ...APPS.map((app) => ({
      url: `${SITE}${app.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE}/privacy/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
