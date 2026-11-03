// Turns the original photos (Gallery/, Updated/, Logo.png) into web-sized
// WebP files in site/images/p/. Run with `npm run images` after adding photos.
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

const OUT = "site/images/p";

// name: [source, widths, optional crop {left, top, width, height} in source px]
const PHOTOS = {
  garden: ["Updated/Contact Image.jpg", [480, 896]],
  meditate: ["Updated/Home page First Image.jpg", [480, 960, 1600]],
  portrait: ["Updated/About Pinki Image.jpg", [480, 768]],
  "prenatal-wall": ["Gallery/IMG-20260928-WA0021.jpg", [480, 896]],
  // These three are Instagram story exports with flat padding baked in; crop it off.
  "prenatal-ball": ["Gallery/IMG_20260928_135726_365.webp", [480, 1010], { left: 0, top: 228, width: 1010, height: 1500 }],
  "prenatal-seated": ["Gallery/IMG_20260928_135903_983.webp", [480, 1080], { left: 0, top: 262, width: 1080, height: 1658 }],
  "prenatal-stretch": ["Gallery/Schedule section image.webp", [480, 1080], { left: 0, top: 303, width: 1080, height: 1617 }],
  community: ["Gallery/IMG-20260928-WA0033.jpg", [480, 922]],
  "online-1": ["Gallery/1000214833.jpg", [640, 1200]],
  "online-2": ["Gallery/1000215538.jpg", [640, 1200]],
  "online-3": ["Gallery/1000280508.jpg", [640, 1200]],
  "online-4": ["Gallery/1000280509.jpg", [640, 1200]],
  "online-5": ["Gallery/1000280510.jpg", [640, 1200]],
  "online-6": ["Gallery/1000280511.jpg", [640, 1200]],
  "online-7": ["Gallery/1000280512.jpg", [640, 1200]],
  "online-8": ["Gallery/IMG-20260928-WA0008.jpg", [640, 960]],
  diet: ["Gallery/diet-bowl.jpg", [480, 960]],
};

await mkdir(OUT, { recursive: true });
const sizes = {};

for (const [name, [src, widths, crop]] of Object.entries(PHOTOS)) {
  const base = crop ? sharp(src).rotate().extract(crop) : sharp(src).rotate();
  const meta = await base.clone().toBuffer({ resolveWithObject: true }).then((r) => r.info);
  for (const w of widths) {
    await base
      .clone()
      .resize({ width: Math.min(w, meta.width), withoutEnlargement: true })
      .webp({ quality: 76, effort: 6 })
      .toFile(`${OUT}/${name}-${w}.webp`);
  }
  sizes[name] = { w: meta.width, h: meta.height, widths };
  console.log(name, `${meta.width}x${meta.height}`, widths.join(","));
}

// Social preview: the meditation photo, cropped wide around the face and hands.
const med = sharp("Updated/Home page First Image.jpg").rotate();
await med
  .clone()
  .extract({ left: 0, top: 900, width: 3024, height: 1588 })
  .resize(1200, 630)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(`${OUT}/og.jpg`);

// Logo mark: cut the circular emblem out of Logo.png (the wordmark below it is
// re-set in type on the site) and keep its own cream disc as a seal.
const { data, info } = await sharp("Logo.png").removeAlpha().raw().toBuffer({ resolveWithObject: true });
let minx = 1e9, maxx = 0;
for (let y = 117; y < 520; y++) {
  for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * 3;
    if (Math.abs(data[i] - 250) + Math.abs(data[i + 1] - 244) + Math.abs(data[i + 2] - 230) > 40) {
      minx = Math.min(minx, x);
      maxx = Math.max(maxx, x);
    }
  }
}
const cx = Math.round((minx + maxx) / 2), cy = 315, r = 225;
const disc = Buffer.from(`<svg width="${r * 2}" height="${r * 2}"><circle cx="${r}" cy="${r}" r="${r}"/></svg>`);
const mark = await sharp("Logo.png")
  .extract({ left: cx - r, top: cy - r, width: r * 2, height: r * 2 })
  .composite([{ input: disc, blend: "dest-in" }])
  .png()
  .toBuffer();
for (const s of [96, 192, 512]) {
  await sharp(mark).resize(s, s).png({ compressionLevel: 9 }).toFile(`${OUT}/mark-${s}.png`);
}
await sharp(mark).resize(192, 192).webp({ quality: 85 }).toFile(`${OUT}/mark-192.webp`);

await writeFile("build/image-sizes.json", JSON.stringify(sizes, null, 2) + "\n");
console.log("done");
