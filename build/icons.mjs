// Hand-drawn style doodles: a soft haldi blob behind a single-weight line.
// Each is a <symbol> in one inline sprite, used with <svg><use href="#i-name">.
// Fill comes from --blob so each section can tint it; selectors cannot reach into <use>.
const blob = (cx, cy, r) => `<circle style="fill:var(--blob);stroke:none" cx="${cx}" cy="${cy}" r="${r}"/>`;

const DOODLES = {
  womens: blob(29, 21, 12) +
    `<path d="M24 37c-7-3.5-10.5-9-10-16 4.5.8 8 3.2 10 6.6 2-3.4 5.5-5.8 10-6.6.5 7-3 12.5-10 16Z"/>
     <path d="M24 27.6c-2.2-4.2-2.2-8.6 0-13 2.2 4.4 2.2 8.8 0 13Z"/><path d="M12 41c8-2.2 16-2.2 24 0"/>`,
  mens: blob(19, 19, 11) +
    `<path d="M24 41V20"/><path d="M24 29c-6 0-9.5-4-9.5-10 6 0 9.5 4 9.5 10Z"/>
     <path d="M24 24c4.8 0 7.8-3.4 7.8-8.6-4.8 0-7.8 3.4-7.8 8.6Z"/><path d="M14 41h20"/>`,
  prenatal: blob(26, 27, 10) +
    `<path d="M30.5 8.5a16 16 0 1 0 9 26.5 13 13 0 0 1-9-26.5Z"/><circle cx="23.5" cy="26" r="3.2"/>
     <path d="M23.5 22.8c0-2.2 1-3.8 2.8-4.6"/>`,
  postpartum: blob(31, 30, 9) +
    `<circle cx="20" cy="17" r="5"/><path d="M11 39c0-8.5 4-14 9-14 3 0 5.6 1.8 7.2 5"/>
     <circle cx="31" cy="30" r="3.4"/><path d="M25 39c0-3.8 2.7-6 6-6s6 2.2 6 6"/>`,
  weightloss: blob(18, 25, 11) +
    `<path d="M17 8c4.5 9 4.5 23 0 32"/><path d="M31 8c-4.5 9-4.5 23 0 32"/>
     <path d="M11 24h5m-2.5-2.5L16 24l-2.5 2.5"/><path d="M37 24h-5m2.5-2.5L32 24l2.5 2.5"/>`,
  breath: blob(30, 17, 10) +
    `<path d="M7 19h20.5a4.5 4.5 0 1 0-4.5-4.5"/><path d="M7 27h27a5 5 0 1 1-5 5"/><path d="M7 35h13"/>`,
  chanting: blob(16, 24, 10) +
    `<circle cx="15" cy="24" r="3"/><path d="M22.5 17a10 10 0 0 1 0 14"/>
     <path d="M28.5 12a17 17 0 0 1 0 24"/><path d="M34.5 7.5a23.5 23.5 0 0 1 0 33"/>`,
  workshops: blob(24, 28, 11) +
    `<path d="M13 31a11 11 0 0 1 22 0"/><path d="M24 10v5M11 16l3.4 3.4M37 16l-3.4 3.4M6 31h4M38 31h4"/>
     <path d="M9 38h30"/>`,
  diet: blob(30, 19, 10) +
    `<path d="M9 26h30a15 15 0 0 1-30 0Z"/><path d="M24 22c0-6.5 4.2-10.5 10.5-10.5 0 6.5-4.2 10.5-10.5 10.5Z"/>
     <path d="M24 22c1.5-2.8 3.6-4.8 6.4-6.2"/>`,
  morning: blob(24, 27, 10) +
    `<path d="M14 32a10 10 0 0 1 20 0"/><path d="M24 12v5M12 19l3 3M36 19l-3 3M7 32h4M37 32h4M10 38h28"/>`,
  evening: blob(21, 23, 11) +
    `<path d="M29 10a14 14 0 1 0 9 24.5A12 12 0 0 1 29 10Z"/><path d="M37 13v4M35 15h4"/>`,
  private: blob(28, 20, 10) +
    `<circle cx="24" cy="16" r="5.5"/><path d="M13 40c0-8 5-13 11-13s11 5 11 13"/><path d="M24 33.5c-1.8-1.6-4-1-4 1 0 2 4 4.5 4 4.5s4-2.5 4-4.5c0-2-2.2-2.6-4-1Z"/>`,
};

const UI = {
  whatsapp: `<path fill="currentColor" stroke="none" d="M12.04 2a9.9 9.9 0 0 0-8.59 14.86L2.05 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm0 18.02c-1.41 0-2.79-.36-4.01-1.05l-.29-.17-3.11.82.83-3.04-.18-.31a8.11 8.11 0 1 1 6.76 3.75Zm4.45-6.07c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.56.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.25a7.6 7.6 0 0 1-1.4-1.74c-.15-.25-.02-.39.11-.51.12-.12.25-.3.38-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.32-.23.27-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.72 2.76 4.25 3.76 2.1.83 2.53.67 2.99.62.46-.04 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z"/>`,
  chevron: `<path d="m6 9 6 6 6-6"/>`,
  close: `<path d="M6 6l12 12M18 6 6 18"/>`,
  instagram: `<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/>`,
  phone: `<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/>`,
  pin: `<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>`,
  pause: `<path d="M9 6v12M15 6v12"/>`,
  play: `<path d="M8 5.5v13l10-6.5-10-6.5Z"/>`,
};

export const sprite = () => `<svg xmlns="http://www.w3.org/2000/svg" class="sprite" aria-hidden="true">
${Object.entries(DOODLES).map(([k, v]) => `<symbol id="d-${k}" viewBox="0 0 48 48">${v}</symbol>`).join("\n")}
${Object.entries(UI).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join("\n")}
</svg>`;

export const doodle = (name, cls = "doodle") =>
  `<svg class="${cls}" aria-hidden="true" focusable="false"><use href="#d-${name}"/></svg>`;
export const icon = (name, cls = "icon") =>
  `<svg class="${cls}" aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`;
