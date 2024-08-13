import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/sign-up"].map((route) => ({
    url: `PRODUCTION_SITE_URL/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
