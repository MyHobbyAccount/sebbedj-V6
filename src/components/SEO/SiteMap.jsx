import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../../utils/constants/paths";

const SiteMap = () => {
  const pages = ["", "#about", "#services", "#testimonials", "#contact"];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${SITE_URL}${page}</loc>
          <changefreq>weekly</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  return (
    <Helmet>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      {/* Prerender status for crawlers */}
      <meta name="prerender-status-code" content="200" />
    </Helmet>
  );
};

export default SiteMap;
