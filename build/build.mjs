// Generates every page in site/ from build/pages.mjs. Run with `npm run build`.
import { writeFile } from "node:fs/promises";
import { page } from "./layout.mjs";
import { PAGES } from "./pages.mjs";
import { SITE } from "./content.mjs";

const today = new Date().toISOString().slice(0, 10);

for (const [file, def] of PAGES) {
  await writeFile(`site/${file}`, page(def));
  console.log("wrote", file);
}

const urls = PAGES.filter(([f]) => !["404.html"].includes(f)).map(([, d]) => d.path);
await writeFile("site/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`);
await writeFile("site/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log("wrote sitemap.xml, robots.txt");
