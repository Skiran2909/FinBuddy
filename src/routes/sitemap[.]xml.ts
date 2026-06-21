import { createFileRoute } from "@tanstack/react-router";
// import type {} from "@tanstack/react-start";

const BASE_URL = (process.env.BASE_URL ?? process.env.SITE_URL ?? "").replace(/\/$/, "");

const paths = [
  "/",
  "/services",
  "/calculators",
  "/resources",
  "/faqs",
  "/about",
  "/contact",
  // Known top-level services (static slugs)
  "/services/life-insurance",
  "/services/term-insurance",
  "/services/health-insurance",
  "/services/retirement-planning",
  "/services/child-education",
  "/services/family-financial-planning",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // If we don't know the domain, do not emit broken relative URLs.
        const urlEntries = BASE_URL
          ? paths.map(
              (p) =>
                `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
            )
          : [];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urlEntries,
          // ...(BASE_URL
          //   ? paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`)
          //   : []),
          // `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

