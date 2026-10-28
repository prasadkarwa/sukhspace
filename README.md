# Sukh Space website

Static site for [sukhspace.com](https://sukhspace.com), deployed from the `site/` folder as-is.

## Editing

The pages in `site/*.html` are generated. Don't edit them by hand. Edit these files instead:

- `build/content.mjs`: phone, email, offerings, testimonials, FAQ, and the WhatsApp messages each button pre-fills.
- `build/pages.mjs`: the layout and copy of each page.
- `build/components.mjs`: sections shared between pages (message composer, schedule, stories…).
- `site/css/site.css` and `site/js/site.js`: styles and behaviour.

Then run:

```sh
npm install        # once
npm run build      # regenerates site/*.html, sitemap.xml, robots.txt
npm run serve      # preview at http://localhost:4173
```

## Photos

Original photos live in `Gallery/` and `Updated/`. To add or change one, list it in `build/images.mjs` and run `npm run images`. That writes resized WebP files to `site/images/p/`. Then run `npm run build`.

After changing CSS or JS, bump `VERSION` in `build/layout.mjs` so browsers fetch the new files.

## WhatsApp enquiries

Every WhatsApp link opens a chat with a pre-filled message ending in `(via sukhspace.com)`. That tag tells Pinki the enquiry came from the website.
