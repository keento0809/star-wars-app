import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "PRODUCTION_SITE_URL";

  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
        allow: ["/$", "/sign-up", "/sitemap.xml"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: "",
  };
}
