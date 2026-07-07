// Canonical production origin, used by sitemap.ts, robots.ts, and any
// absolute-URL metadata. Override per-environment with NEXT_PUBLIC_SITE_URL
// (no trailing slash). Defaults to the live domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://crossaire.com"
).replace(/\/+$/, "");
