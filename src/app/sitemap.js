// TODO: Replace with your real production domain (e.g. https://your-site.vercel.app)
const siteUrl = "https://REPLACE_WITH_YOUR_PRODUCTION_URL";

/**
 * App Router sitemap — served at /sitemap.xml
 * Single-page portfolio: only the home route is listed.
 */
export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
