// TODO: Replace with your real production domain (e.g. https://your-site.vercel.app)
const siteUrl = "https://REPLACE_WITH_YOUR_PRODUCTION_URL";

/**
 * App Router robots — served at /robots.txt
 * Allows crawling and points bots to the sitemap.
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
