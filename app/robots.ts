import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
        allow: ["/$", "/sign-up", "/sitemap.xml"],
      },
    ],
    sitemap: `PRODUCTION_SITE_URL/sitemap.xml`,
    host: "",
  };
}
