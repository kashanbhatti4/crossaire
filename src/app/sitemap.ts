import type { MetadataRoute } from "next";
import locationsData from "@/data/locationsData";
import { SITE_URL } from "@/lib/site";

// Service slugs served under /services/<slug>. Kept in sync with the folders
// in src/app/services and the servicesList in Header.tsx.
const serviceSlugs = [
  "kitchen-hood-cleaning",
  "restaurant-kitchen-exhaust-system-cleaning",
  "kitchen-exhaust-fan-repairs",
  "kitchen-exhaust-fan-installation",
  "grease-trap-cleaning",
  "pollution-control-systems-maintenance",
  "kitchen-hood-startups-and-commissioning",
  "roof-grease-containment-systems-installations",
  "restaurant-hood-filter-cleaning-exchange",
  "kitchen-exhaust-duct-repair-access-panel-installation",
  "kitchen-hood-inspections",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = Object.keys(locationsData).map((slug) => ({
    url: `${SITE_URL}/locations/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
