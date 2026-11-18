// Lists every page for Google and Bing. Add new pages to this list.
const pages = [
  { path: "/", priority: "1.0" },
  { path: "/services/", priority: "0.9" },
  { path: "/projects/", priority: "0.9" },
  { path: "/about/", priority: "0.7" },
  { path: "/contact/", priority: "0.8" },
];
export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>https://leadsglazing.com${p.path}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
