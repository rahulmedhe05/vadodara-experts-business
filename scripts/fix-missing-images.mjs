import sharp from "sharp";
import { mkdirSync, existsSync } from "fs";
import { join } from "path";

const PUBLIC_DIR = "public/images/niches";

// Replacement URLs for the 28 failed downloads
const fixes = {
  "ac-services/hero.webp": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "building-automation-systems/content-1.webp": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  "cable-tray-services/content-2.webp": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
  "coaching-classes/content-1.webp": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
  "commercial-pest-control/hero.webp": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
  "electrical-contracting-services/content-1.webp": "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
  "electrical-contractor-services/content-1.webp": "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
  "electrical-panel-manufacturing/content-1.webp": "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
  "electrical-services/content-1.webp": "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
  "ev-charging-installation/content-1.webp": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
  "generator-installation-services/content-1.webp": "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
  "geyser-services/content-2.webp": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
  "home-cleaning-services/content-2.webp": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
  "hvac-contractors/hero.webp": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "industrial-electrical-contractors/content-2.webp": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
  "industrial-generator-suppliers/content-2.webp": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
  "industrial-hvac-systems/hero.webp": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "kitchen-chimney-services/content-1.webp": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "microwave-oven-services/content-1.webp": "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&q=80",
  "modular-kitchen-services/content-1.webp": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "pest-control-services/hero.webp": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
  "smart-home-automation/content-1.webp": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
  "spoken-english-classes/content-1.webp": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
  "study-abroad-consultants/hero.webp": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
  "swimming-pool-construction/hero.webp": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "termite-control-services/hero.webp": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
  "transformer-repair-services/content-2.webp": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
  "transformer-services/content-2.webp": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
};

async function downloadAndConvert(url, outputPath) {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "VadodaraExperts-ImageDownloader/1.0" },
    });
    if (!response.ok) {
      console.error(`  ✗ HTTP ${response.status} for ${url}`);
      return false;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    await sharp(buffer).webp({ quality: 80 }).toFile(outputPath);
    return true;
  } catch (err) {
    console.error(`  ✗ Error: ${err.message}`);
    return false;
  }
}

async function main() {
  const entries = Object.entries(fixes);
  console.log(`\n🔧 Fixing ${entries.length} missing images...\n`);
  let success = 0, failed = 0;

  for (const [path, url] of entries) {
    const outputPath = join(PUBLIC_DIR, path);
    console.log(`  → ${path}`);
    const ok = await downloadAndConvert(url, outputPath);
    ok ? success++ : failed++;
  }

  console.log(`\n✅ Done! ${success} fixed, ${failed} still failed\n`);
}

main();
