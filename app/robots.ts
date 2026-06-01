import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: [
      // Static sitemap index — most reliable for Google
      "https://vadodaraexperts.com/sitemap-index.xml",
      // Individual sitemaps (Next.js generated)
      ...Array.from({ length: 26 }, (_, i) => `https://vadodaraexperts.com/sitemap/${i}.xml`),
    ],
  };
}
