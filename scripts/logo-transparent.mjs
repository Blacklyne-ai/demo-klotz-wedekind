import sharp from 'sharp';
import { copyFile } from 'node:fs/promises';

// Backup original
await copyFile('./public/logo.png', './public/logo-original.png').catch(() => {});

// Lade Original, mache weiße Pixel transparent
const input = './public/logo-schriftzug.png';
const output = './public/logo.png';

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const buf = Buffer.from(data);

// Threshold: alles über 235/235/235 → transparent (weiß + leicht off-white)
// Antialiasing: Pixel zwischen 200-235 → Alpha-Progression
for (let i = 0; i < buf.length; i += channels) {
  const r = buf[i], g = buf[i+1], b = buf[i+2];
  const minVal = Math.min(r, g, b);
  if (r >= 235 && g >= 235 && b >= 235) {
    buf[i+3] = 0; // voll transparent
  } else if (minVal >= 200 && r >= 200 && g >= 200 && b >= 200) {
    // Anti-Aliasing-Übergang: alpha reduziert proportional zur Helligkeit
    buf[i+3] = Math.round((1 - (minVal - 200) / 35) * 255);
  }
}

await sharp(buf, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log('Logo transparent geschrieben:', output, `${width}x${height}`);
