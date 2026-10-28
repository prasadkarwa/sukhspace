import { readFileSync } from "node:fs";
import { SITE, PHONE, PHONE_DISPLAY, EMAIL, INSTAGRAM, TEACHER, NAV, OFFERINGS, WA_DEFAULT, wa } from "./content.mjs";
import { sprite, icon } from "./icons.mjs";

const SIZES = JSON.parse(readFileSync(new URL("./image-sizes.json", import.meta.url)));
export const VERSION = "20261028b";

// <img> for a photo processed by images.mjs, with srcset across its widths.
export const photo = (name, alt, { sizes = "100vw", cls = "", eager = false, pos = "" } = {}) => {
  const s = SIZES[name];
  if (!s) throw new Error(`Unknown photo ${name}`);
  const srcset = s.widths.map((w) => `/images/p/${name}-${w}.webp ${Math.min(w, s.w)}w`).join(", ");
  const largest = s.widths[s.widths.length - 1];
  return `<img src="/images/p/${name}-${largest}.webp" srcset="${srcset}" sizes="${sizes}" alt="${alt}"` +
    ` width="${s.w}" height="${s.h}"${cls ? ` class="${cls}"` : ""}${pos ? ` style="object-position:${pos}"` : ""}` +
    (eager ? ` fetchpriority="high" decoding="async"` : ` loading="lazy" decoding="async"`) + `>`;
};

export const photoSrc = (name) => {
  const s = SIZES[name];
  return `/images/p/${name}-${s.widths[s.widths.length - 1]}.webp`;
};

export const waButton = (href, label, cls = "btn btn-haldi") =>
  `<a class="${cls}" href="${href}" target="_blank" rel="noopener" data-wa>${icon("whatsapp")}<span>${label}</span></a>`;

const business = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE}/#business`,
  name: "Sukh Space",
  url: `${SITE}/`,
  logo: `${SITE}/images/p/mark-512.png`,
  image: [`${SITE}/images/p/og.jpg`, `${SITE}/images/p/garden-896.webp`],
  description: "Yoga, breathwork and wellness with Pinki (Pankhuri): pre-natal, postpartum, women’s and men’s health, weight loss and meditation. In Dhanbad and online across India.",
  telephone: `+${PHONE}`,
  email: EMAIL,
  address: { "@type": "PostalAddress", addressLocality: "Dhanbad", addressRegion: "Jharkhand", addressCountry: "IN" },
  areaServed: [{ "@type": "City", name: "Dhanbad" }, { "@type": "Country", name: "India" }],
  founder: {
    "@type": "Person",
    name: TEACHER,
    jobTitle: "Pre & Postnatal Yoga Specialist",
    hasCredential: { "@type": "EducationalOccupationalCredential", name: "200-Hour Yoga Teacher Training certification" },
    image: `${SITE}/images/p/portrait-768.webp`,
  },
  sameAs: [INSTAGRAM],
  makesOffer: OFFERINGS.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o.name, description: o.forWhom } })),
};

const header = (page) => `
<a class="skip" href="#main">Skip to content</a>
<div class="topbar">
  <span>Online &amp; offline sessions</span>
  <a href="${WA_DEFAULT}" target="_blank" rel="noopener" data-wa>${icon("whatsapp")}WhatsApp ${PHONE_DISPLAY.replace("+91 ", "")}</a>
</div>
<header class="site-header" data-header>
  <div class="wrap header-row">
    <a class="brand" href="/" aria-label="Sukh Space home">
      <img src="/images/p/mark-192.webp" alt="" width="96" height="96">
      <span>Sukh Space</span>
    </a>
    <nav class="nav" aria-label="Main">
      <ul>
        ${NAV.map((n) => `<li><a href="${n.href}"${n.key === page ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("\n        ")}
      </ul>
    </nav>
    ${waButton(WA_DEFAULT, "Message Pinki", "btn btn-haldi btn-small header-cta")}
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" data-menu-open>Menu</button>
  </div>
</header>
<dialog class="menu" id="menu" aria-label="Menu">
  <div class="menu-top">
    <a class="brand" href="/"><img src="/images/p/mark-192.webp" alt="" width="96" height="96"><span>Sukh Space</span></a>
    <button class="menu-close" type="button" data-menu-close aria-label="Close menu">${icon("close")}</button>
  </div>
  <ul>
    <li><a href="/"${page === "home" ? ' aria-current="page"' : ""}>Home</a></li>
    ${NAV.map((n) => `<li><a href="${n.href}"${n.key === page ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("\n    ")}
  </ul>
  ${waButton(WA_DEFAULT, "Message Pinki on WhatsApp", "btn btn-haldi btn-block")}
</dialog>`;

const footer = (cta) => `
<section class="closing" aria-labelledby="closing-title" data-dock-hide>
  <div class="wrap closing-grid">
    <div>
      <h2 id="closing-title">${cta.title}</h2>
      <p>${cta.text}</p>
    </div>
    <div class="closing-action">
      ${waButton(cta.href || WA_DEFAULT, cta.label || "Message Pinki on WhatsApp", "btn btn-haldi btn-large")}
      <p class="fine">Pinki replies personally. Nothing to pay to start a chat.</p>
    </div>
  </div>
</section>
<footer class="site-footer" data-dock-hide>
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a class="brand" href="/"><img src="/images/p/mark-192.webp" alt="" width="96" height="96" loading="lazy"><span>Sukh Space</span></a>
      <p>Creating space for your sukh through yoga, breathwork and wellness. Ancient yogic wisdom with modern somatic practices, in Dhanbad and online.</p>
    </div>
    <nav aria-label="Practices">
      <h3>Practices</h3>
      <ul>${OFFERINGS.map((o) => `<li><a href="/offerings#${o.id}">${o.name}</a></li>`).join("")}</ul>
    </nav>
    <nav aria-label="Sukh Space">
      <h3>Sukh Space</h3>
      <ul>${NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}<li><a href="/terms">Terms &amp; refunds</a></li></ul>
    </nav>
    <div>
      <h3>Reach us</h3>
      <ul class="reach">
        <li><a href="${WA_DEFAULT}" target="_blank" rel="noopener" data-wa>${icon("whatsapp")}WhatsApp ${PHONE_DISPLAY}</a></li>
        <li><a href="tel:+${PHONE}">${icon("phone")}Call ${PHONE_DISPLAY}</a></li>
        <li><a href="mailto:${EMAIL}">${icon("mail")}${EMAIL}</a></li>
        <li><a href="${INSTAGRAM}" target="_blank" rel="noopener">${icon("instagram")}@sukhspace_</a></li>
        <li><span>${icon("pin")}Dhanbad, Jharkhand. Online across India.</span></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-base">
    <p>Yoga complements medical care and never replaces it. Please consult your doctor before starting a new practice, especially during pregnancy or after birth.</p>
    <p>© ${new Date().getFullYear()} Sukh Space</p>
  </div>
</footer>
<div class="dock" data-dock>
  ${waButton(WA_DEFAULT, "Message Pinki on WhatsApp", "btn btn-haldi btn-block")}
</div>`;

export const page = ({ key, path, title, description, body, hero = "light", cta, schema = [], image = "/images/p/og.jpg", preload }) => {
  const url = `${SITE}${path}`;
  const ld = [business, ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n");
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#173a33">
<link rel="icon" href="/images/p/mark-96.png" type="image/png">
<link rel="apple-touch-icon" href="/images/p/mark-192.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Sukh Space">
<meta property="og:locale" content="en_IN">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${SITE}${image}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap">
${preload || ""}
<link rel="stylesheet" href="/css/site.css?v=${VERSION}">
${ld}
</head>
<body data-page="${key}" data-hero="${hero}">
${sprite()}
${header(key)}
<main id="main">
${body}
</main>
${footer(cta || {
    title: "Begin with one message.",
    text: "Tell Pinki where you are in your journey. She’ll suggest the right session, batch and fee for you.",
  })}
<script src="/js/site.js?v=${VERSION}" defer></script>
</body>
</html>
`;
};

export { wa, WA_DEFAULT };
