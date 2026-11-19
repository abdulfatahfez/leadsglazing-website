// Makes fast, responsive copies of every photo in public/images.
// Runs automatically before `npm run dev` and `npm run build`.
// Output: public/img/<name>-<width>.webp (+ one compressed .jpg/.png fallback)
// and src/data/images.json, which the <Img> component reads.
import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync, statSync, writeFileSync } from "node:fs";
import { join, parse } from "node:path";

const SRC = "public/images";
const OUT = "public/img";
const WIDTHS = [480, 960, 1600];
mkdirSync(OUT, { recursive: true });

const manifest = {};
let made = 0;
const fresh = (out, src) => existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs;

for (const file of readdirSync(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const src = join(SRC, file);
  const { name, ext } = parse(file);
  const isPng = /png/i.test(ext);
  const meta = await sharp(src).metadata();
  const widths = [...new Set([...WIDTHS.filter((w) => w < meta.width), Math.min(meta.width, 1600)])].sort((a, b) => a - b);

  for (const w of widths) {
    const out = join(OUT, `${name}-${w}.webp`);
    if (fresh(out, src)) continue;
    await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: isPng ? 90 : 78, effort: 6, alphaQuality: 100 }).toFile(out);
    made++;
  }
  const top = widths.at(-1);
  const fbName = `${name}-${top}${isPng ? ".png" : ".jpg"}`;
  const fb = join(OUT, fbName);
  if (!fresh(fb, src)) {
    const img = sharp(src).resize({ width: top, withoutEnlargement: true });
    await (isPng ? img.png({ compressionLevel: 9, palette: true, quality: 90 }) : img.jpeg({ quality: 80, mozjpeg: true, progressive: true })).toFile(fb);
    made++;
  }
  manifest[`/images/${file}`] = {
    width: top,
    height: Math.round((meta.height * top) / meta.width),
    widths,
    webp: `/img/${name}`,
    fallback: `/img/${fbName}`,
  };
}

writeFileSync("src/data/images.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`images: ${Object.keys(manifest).length} sources, ${made} files written`);
