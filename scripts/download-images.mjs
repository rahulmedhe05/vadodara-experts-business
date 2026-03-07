#!/usr/bin/env node
/**
 * Image Downloader + WebP Converter for VadodaraExperts
 * Downloads niche-relevant images from Unsplash, converts to WebP,
 * and saves locally for fast loading.
 *
 * Usage: node scripts/download-images.mjs
 * Options: --niche=ac-services   (process single niche)
 *          --skip-existing        (skip already downloaded)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import https from "https";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_IMG_DIR = path.join(ROOT, "public", "images", "niches");

// ===== NICHE → SEARCH TERMS MAPPING =====
// Each niche gets specific, relevant search terms for Unsplash
const nicheSearchTerms = {
  "ac-services": ["air conditioner repair technician", "hvac cleaning service", "ac unit maintenance"],
  "refrigerator-services": ["refrigerator repair", "fridge maintenance technician", "kitchen appliance repair"],
  "washing-machine-services": ["washing machine repair", "laundry appliance service", "washing machine technician"],
  "microwave-oven-services": ["microwave oven repair", "kitchen appliance technician", "oven repair service"],
  "geyser-services": ["water heater repair", "geyser installation plumber", "hot water system maintenance"],
  "water-purifier-services": ["water purifier installation", "ro water filter service", "water treatment system"],
  "plumbing-services": ["plumber working pipe repair", "plumbing service bathroom", "professional plumber tools"],
  "electrical-services": ["electrician working wiring", "electrical panel repair", "electrical service technician"],
  "pest-control-services": ["pest control spray service", "exterminator protective gear", "pest management professional"],
  "termite-control-services": ["termite treatment wood", "termite inspection professional", "pest control fumigation"],
  "home-cleaning-services": ["professional home cleaning", "house cleaning service team", "deep cleaning floor mop"],
  "water-tank-cleaning": ["water tank cleaning service", "overhead tank maintenance", "water storage cleaning"],
  "sofa-cleaning-services": ["sofa cleaning professional", "upholstery cleaning machine", "fabric couch shampooing"],
  "carpet-cleaning-services": ["carpet cleaning machine", "professional carpet cleaner", "floor carpet shampooing"],
  "kitchen-chimney-services": ["kitchen chimney cleaning", "range hood maintenance", "chimney filter service"],
  "cctv-installation-services": ["cctv camera installation", "security camera system", "surveillance setup technician"],
  "home-security-systems": ["home security alarm system", "smart lock installation", "residential security camera"],
  "smart-home-automation": ["smart home control panel", "home automation system", "iot smart devices home"],
  "solar-panel-installation": ["solar panel rooftop installation", "solar energy system", "photovoltaic panel worker"],
  "inverter-battery-services": ["inverter battery maintenance", "ups system installation", "power backup service"],
  "generator-installation-services": ["diesel generator installation", "power generator service", "backup generator maintenance"],
  "home-painting-services": ["house painter working wall", "interior painting service", "professional wall painting"],
  "waterproofing-services": ["waterproofing roof terrace", "waterproof coating application", "building waterproofing"],
  "false-ceiling-services": ["false ceiling installation", "gypsum ceiling design", "pop ceiling work"],
  "tile-installation-services": ["tile installation floor", "ceramic tile laying worker", "bathroom tile fitting"],
  "marble-granite-services": ["marble floor polishing", "granite countertop installation", "stone flooring work"],
  "carpenter-services": ["carpenter woodworking furniture", "carpentry workshop tools", "wood furniture craftsman"],
  "furniture-repair-services": ["furniture restoration repair", "wood furniture polishing", "antique furniture repair"],
  "aluminium-glass-work": ["aluminium window installation", "glass partition work", "aluminum frame fabrication"],
  "curtain-blinds-installation": ["curtain installation window", "window blinds fitting", "drapes hanging service"],
  "mosquito-net-installation": ["mosquito net window fitting", "insect screen installation", "window mesh service"],
  "balcony-renovation-services": ["balcony renovation modern", "terrace makeover design", "balcony railing installation"],
  "modular-kitchen-services": ["modular kitchen installation", "kitchen cabinet fitting", "modern kitchen design"],
  "wardrobe-installation-services": ["wardrobe fitting bedroom", "closet installation modular", "built-in wardrobe design"],
  "interior-design-services": ["interior design living room", "modern interior decoration", "home interior styling"],
  "home-renovation-services": ["home renovation construction", "house remodeling work", "residential renovation project"],
  "building-maintenance-services": ["building maintenance worker", "commercial building repair", "facility maintenance team"],
  "facility-management-services": ["facility management office", "building management service", "commercial property maintenance"],
  "security-guard-services": ["security guard uniform", "building security patrol", "professional security service"],
  "lift-installation-services": ["elevator installation building", "lift maintenance technician", "passenger elevator service"],
  "escalator-installation": ["escalator installation mall", "escalator maintenance service", "moving stairway installation"],
  "ev-charging-installation": ["electric vehicle charging station", "ev charger installation", "electric car charging point"],
  "borewell-drilling-services": ["borewell drilling machine", "water well drilling rig", "groundwater borehole drill"],
  "water-pump-services": ["water pump motor repair", "submersible pump installation", "water pump maintenance"],
  "tanker-water-supply": ["water tanker supply truck", "drinking water delivery", "water tanker filling"],
  "garbage-collection-contractors": ["garbage truck waste collection", "waste management service", "municipal garbage pickup"],
  "garden-landscaping-services": ["garden landscaping design", "landscape gardener working", "beautiful garden maintenance"],
  "tree-cutting-services": ["tree cutting chainsaw arborist", "tree trimming service", "professional tree removal"],
  "swimming-pool-construction": ["swimming pool construction", "pool installation work", "residential pool building"],
  "terrace-garden-services": ["terrace garden rooftop", "rooftop garden plants", "urban terrace gardening"],
  "construction-contractors": ["construction site workers building", "construction contractor team", "building construction project"],
  "civil-contractors": ["civil engineering construction", "road building contractor", "infrastructure construction work"],
  "architecture-firms": ["architectural design blueprint", "architect planning modern building", "architecture office workspace"],
  "structural-engineering": ["structural engineering beam", "steel structure construction", "building structural design"],
  "construction-project-management": ["construction project manager site", "building project planning", "construction management team"],
  "construction-safety-consultancy": ["construction safety helmet worker", "site safety inspection", "workplace safety training"],
  "building-demolition-services": ["building demolition excavator", "structure demolition work", "controlled demolition site"],
  "building-inspection-services": ["building inspection engineer", "structural inspection checklist", "property inspection professional"],
  "container-house-construction": ["container house modern", "shipping container home", "prefab container building"],
  "rcc-construction-services": ["rcc concrete construction", "reinforced concrete pouring", "cement concrete structure"],
  "road-construction-services": ["road construction heavy machinery", "asphalt road building", "highway construction work"],
  "piling-foundation-services": ["pile foundation drilling", "deep foundation construction", "piling machine work"],
  "ready-mix-concrete-services": ["concrete mixer truck", "ready mix concrete pouring", "cement mixer delivery"],
  "scaffolding-services": ["scaffolding building construction", "metal scaffold structure", "scaffolding installation worker"],
  "commercial-interior-design": ["commercial office interior", "corporate interior design", "modern office workspace design"],
  "residential-interior-design": ["residential interior design living room", "home decor interior", "luxury home interior"],
  "epoxy-flooring-services": ["epoxy floor coating garage", "industrial epoxy flooring", "resin floor application"],
  "epoxy-flooring-contractors": ["epoxy floor contractor application", "commercial epoxy coating", "warehouse floor epoxy"],
  "painting-contractors": ["commercial painting contractor", "building exterior painting", "industrial painting work"],
  "plaster-of-paris-services": ["plaster of paris ceiling", "pop design wall", "decorative plasterwork"],
  "digital-marketing-services": ["digital marketing office team", "social media marketing workspace", "seo marketing professional"],
  "chartered-accountant-services": ["chartered accountant office", "financial accounting professional", "tax consultant documents"],
  "company-registration-services": ["company registration documents", "business registration office", "corporate filing paperwork"],
  "legal-services": ["lawyer legal consultation", "law office professional", "legal document review"],
  "real-estate-services": ["real estate agent property", "house sale property viewing", "commercial real estate office"],
  "commercial-property-brokers": ["commercial property broker", "office space rental agent", "real estate commercial deal"],
  "property-valuation-services": ["property valuation inspector", "real estate appraisal", "building valuation assessment"],
  "loan-finance-services": ["loan finance bank office", "financial advisor consultation", "business loan application"],
  "insurance-services": ["insurance agent meeting client", "insurance policy documents", "insurance claim processing"],
  "event-management-services": ["event management wedding decoration", "corporate event planning", "party event setup team"],
  "catering-services": ["catering service food buffet", "professional catering team", "event food service setup"],
  "decoration-services": ["decoration wedding venue", "party decoration balloon", "event decoration flowers"],
  "photography-services": ["professional photographer camera", "event photography shoot", "studio photography equipment"],
  "corporate-photography": ["corporate headshot photography", "business event photographer", "office photography session"],
  "videography-services": ["video production camera crew", "professional videographer filming", "video shooting equipment"],
  "printing-services": ["printing press machine", "commercial print service", "digital printing office"],
  "signage-services": ["signage board installation", "neon sign making", "shop board lettering"],
  "diagnostic-labs": ["medical diagnostic laboratory", "pathology lab testing", "blood test laboratory equipment"],
  "dental-clinics": ["dental clinic dentist patient", "dental care equipment", "modern dental office"],
  "dermatology-clinics": ["dermatology skin clinic", "skin treatment doctor", "dermatologist consultation"],
  "physiotherapy-services": ["physiotherapy treatment session", "physical therapy rehabilitation", "physiotherapist exercise"],
  "veterinary-services": ["veterinary clinic animal doctor", "pet care veterinarian", "animal hospital treatment"],
  "coaching-classes": ["coaching class students learning", "tuition center classroom", "education coaching institute"],
  "3d-printing-services": ["3d printer machine printing", "additive manufacturing prototype", "3d printing technology"],
  "cnc-machining-services": ["cnc machine cutting metal", "precision machining factory", "cnc lathe operation"],
  "electrical-panel-manufacturing": ["electrical panel manufacturing", "control panel assembly", "switchgear manufacturing"],
  "electrical-contracting-services": ["electrical contractor wiring", "commercial electrical installation", "industrial electrical work"],
  "electrical-contractor-services": ["electrical contractor building", "electrical panel installation", "power distribution setup"],
  "fire-safety-services": ["fire safety equipment installation", "fire extinguisher maintenance", "fire alarm system setup"],
  "courier-delivery-services": ["courier delivery package", "express delivery service", "parcel shipping logistics"],
  "packers-movers-services": ["packers movers truck loading", "household moving service", "relocation packing team"],
  "transport-logistics-services": ["transport truck logistics fleet", "cargo logistics warehouse", "freight transportation vehicle"],
  "customs-clearance-agents": ["customs clearance documents port", "import export agent office", "shipping customs paperwork"],
  "calibration-services": ["calibration equipment laboratory", "precision instrument calibration", "measuring tool calibration"],
  "cooling-tower-systems": ["cooling tower industrial plant", "hvac cooling tower maintenance", "water cooling tower system"],
  "conveyor-belt-services": ["conveyor belt factory system", "industrial conveyor maintenance", "belt conveyor manufacturing"],
  "conveyor-system-installation": ["conveyor system installation", "material handling conveyor", "automated conveyor factory"],
  "crane-rental-services": ["crane rental construction site", "mobile crane heavy lifting", "tower crane operation"],
  "crane-hoist-services": ["crane hoist lifting equipment", "overhead crane industrial", "chain hoist operation"],
  "electric-motor-services": ["electric motor repair workshop", "industrial motor maintenance", "motor winding repair"],
  "electroplating-services": ["electroplating metal finishing", "chrome plating process", "metal surface treatment"],
  "anodizing-services": ["anodizing aluminum process", "metal anodizing factory", "surface anodizing treatment"],
  "chemical-manufacturing": ["chemical manufacturing plant", "chemical processing factory", "industrial chemical production"],
  "effluent-treatment-plants": ["effluent treatment plant", "wastewater treatment facility", "industrial water treatment"],
  "energy-audit-consultancy": ["energy audit building inspection", "energy efficiency consultant", "power consumption analysis"],
  "commercial-solar-installation": ["commercial solar panel rooftop", "industrial solar installation", "large scale solar system"],
  "elevator-maintenance": ["elevator maintenance technician", "lift repair service", "elevator inspection safety"],
  "escalator-maintenance-services": ["escalator maintenance repair", "escalator service technician", "moving stairway maintenance"],
  "abrasive-grinding-suppliers": ["abrasive grinding wheel", "grinding machine operation", "industrial abrasive tools"],
  "air-compressor-suppliers": ["air compressor industrial", "compressed air equipment", "pneumatic compressor machine"],
  "bearing-dealers": ["bearing industrial machinery", "ball bearing steel parts", "bearing supplier warehouse"],
  "boiler-services": ["industrial boiler maintenance", "steam boiler operation", "boiler repair technician"],
  "cable-tray-services": ["cable tray electrical installation", "wire management tray system", "cable routing industrial"],
  "commercial-pest-control": ["commercial pest control office", "industrial pest management", "business fumigation service"],
  "compressor-parts-services": ["compressor parts repair", "air compressor maintenance", "industrial compressor service"],
  "aluminium-facade-installation": ["aluminium facade building", "curtain wall installation", "modern facade cladding"],
  "building-automation-systems": ["building automation control panel", "smart building management", "bms system monitoring"],
};

// ===== UNSPLASH IMAGE SEARCH =====
// Use Unsplash source redirect (no API key needed, but limited)
// For better results, use the Unsplash API with an access key
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || "";

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    const get = (u) => {
      https.get(u, { headers: { "User-Agent": "VadodaraExperts-ImageTool/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${u}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      }).on("error", reject);
    };
    get(url);
  });
}

async function searchUnsplash(query, perPage = 3) {
  if (UNSPLASH_ACCESS_KEY) {
    const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape&content_filter=high`;
    const buf = await downloadBuffer(searchUrl.replace("https://api", "https://api") + `&client_id=${UNSPLASH_ACCESS_KEY}`);
    const data = JSON.parse(buf.toString());
    return (data.results || []).map((r) => r.urls?.regular || r.urls?.small).filter(Boolean);
  }
  // Fallback: use unsplash source (random, but deterministic with query)
  return [
    `https://source.unsplash.com/800x500/?${encodeURIComponent(query)}&sig=hero`,
    `https://source.unsplash.com/600x400/?${encodeURIComponent(query)}&sig=content1`,
    `https://source.unsplash.com/600x400/?${encodeURIComponent(query)}&sig=content2`,
  ];
}

// ===== PROCESS A SINGLE NICHE =====
async function processNiche(nicheSlug, searchTerms, skipExisting) {
  const nicheDir = path.join(PUBLIC_IMG_DIR, nicheSlug);
  const heroPath = path.join(nicheDir, "hero.webp");
  const content1Path = path.join(nicheDir, "content-1.webp");
  const content2Path = path.join(nicheDir, "content-2.webp");

  if (skipExisting && fs.existsSync(heroPath) && fs.existsSync(content1Path) && fs.existsSync(content2Path)) {
    console.log(`  ⏭  ${nicheSlug} — already exists, skipping`);
    return;
  }

  fs.mkdirSync(nicheDir, { recursive: true });

  const files = [
    { term: searchTerms[0], path: heroPath, width: 800, height: 500, label: "hero" },
    { term: searchTerms[1] || searchTerms[0], path: content1Path, width: 600, height: 400, label: "content-1" },
    { term: searchTerms[2] || searchTerms[0], path: content2Path, width: 600, height: 400, label: "content-2" },
  ];

  for (const file of files) {
    try {
      if (skipExisting && fs.existsSync(file.path)) {
        console.log(`    ✓ ${file.label} exists`);
        continue;
      }

      let urls;
      if (UNSPLASH_ACCESS_KEY) {
        urls = await searchUnsplash(file.term, 1);
      } else {
        urls = [`https://source.unsplash.com/${file.width}x${file.height}/?${encodeURIComponent(file.term)}`];
      }

      if (!urls.length) {
        console.log(`    ⚠ No image found for "${file.term}"`);
        continue;
      }

      const imgBuffer = await downloadBuffer(urls[0]);

      // Convert to WebP with sharp
      await sharp(imgBuffer)
        .resize(file.width, file.height, { fit: "cover", position: "center" })
        .webp({ quality: 80, effort: 6 })
        .toFile(file.path);

      const sizeKB = (fs.statSync(file.path).size / 1024).toFixed(1);
      console.log(`    ✓ ${file.label}.webp (${sizeKB} KB)`);

      // Rate limit: 50ms between requests
      await new Promise((r) => setTimeout(r, 50));
    } catch (err) {
      console.log(`    ✗ ${file.label} failed: ${err.message}`);
    }
  }
}

// ===== GENERATE UPDATED images.ts =====
function generateImagesTS(processedNiches) {
  const lines = [
    `/**`,
    ` * Image Mapping System for VadodaraExperts.com`,
    ` * Local WebP images for fast loading — auto-generated by scripts/download-images.mjs`,
    ` */`,
    ``,
    `interface NicheImages {`,
    `  hero: string;`,
    `  content: string[];`,
    `}`,
    ``,
    `// Local WebP images per niche`,
    `const nicheImages: Record<string, NicheImages> = {`,
  ];

  for (const slug of processedNiches) {
    lines.push(`  "${slug}": { hero: "/images/niches/${slug}/hero.webp", content: ["/images/niches/${slug}/content-1.webp", "/images/niches/${slug}/content-2.webp"] },`);
  }

  lines.push(`};`);
  lines.push(``);
  lines.push(`// Fallback category images`);
  lines.push(`const defaultCategoryImages: Record<string, NicheImages> = {`);
  lines.push(`  "Home Services": { hero: "/images/niches/home-cleaning-services/hero.webp", content: ["/images/niches/home-cleaning-services/content-1.webp", "/images/niches/home-cleaning-services/content-2.webp"] },`);
  lines.push(`  "Professional Services": { hero: "/images/niches/digital-marketing-services/hero.webp", content: ["/images/niches/digital-marketing-services/content-1.webp", "/images/niches/digital-marketing-services/content-2.webp"] },`);
  lines.push(`  "Construction & Infrastructure": { hero: "/images/niches/construction-contractors/hero.webp", content: ["/images/niches/construction-contractors/content-1.webp", "/images/niches/construction-contractors/content-2.webp"] },`);
  lines.push(`  "Industrial Services": { hero: "/images/niches/cnc-machining-services/hero.webp", content: ["/images/niches/cnc-machining-services/content-1.webp", "/images/niches/cnc-machining-services/content-2.webp"] },`);
  lines.push(`};`);
  lines.push(``);
  lines.push(`export function getNicheImages(nicheSlug: string, category: string): NicheImages {`);
  lines.push(`  return nicheImages[nicheSlug] || defaultCategoryImages[category] || defaultCategoryImages["Home Services"];`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`export function getImageAlt(nicheName: string, keyword: string): string {`);
  lines.push(`  return \`\${nicheName} - \${keyword} in Vadodara | VadodaraExperts\`;`);
  lines.push(`}`);
  lines.push(``);

  return lines.join("\n");
}

// ===== MAIN =====
async function main() {
  const args = process.argv.slice(2);
  const singleNiche = args.find((a) => a.startsWith("--niche="))?.split("=")[1];
  const skipExisting = args.includes("--skip-existing");

  // Get all niche slugs from app directory
  const appDir = path.join(ROOT, "app");
  const allNicheSlugs = fs.readdirSync(appDir)
    .filter((d) => {
      const full = path.join(appDir, d);
      return fs.statSync(full).isDirectory() && !["about", "contact"].includes(d) && !d.startsWith("(") && !d.startsWith("_");
    })
    .sort();

  const nichesToProcess = singleNiche ? [singleNiche] : allNicheSlugs;
  console.log(`\n🖼  VadodaraExperts Image Downloader + WebP Converter`);
  console.log(`   Processing ${nichesToProcess.length} niches...\n`);

  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });

  let processed = 0;
  const processedSlugs = [];

  for (const slug of nichesToProcess) {
    processed++;
    const terms = nicheSearchTerms[slug] || [slug.replace(/-/g, " ") + " service vadodara", slug.replace(/-/g, " ") + " professional", slug.replace(/-/g, " ") + " work"];
    console.log(`[${processed}/${nichesToProcess.length}] ${slug}`);
    await processNiche(slug, terms, skipExisting);
    processedSlugs.push(slug);
  }

  // Generate updated images.ts only when processing all niches
  if (!singleNiche) {
    const imagesTS = generateImagesTS(allNicheSlugs);
    fs.writeFileSync(path.join(ROOT, "lib", "images.ts"), imagesTS);
    console.log(`\n✅ Updated lib/images.ts with ${allNicheSlugs.length} local WebP image paths`);
  }

  // Calculate total size
  let totalSize = 0;
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const f of fs.readdirSync(dir)) {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) walk(fp);
      else totalSize += fs.statSync(fp).size;
    }
  };
  walk(PUBLIC_IMG_DIR);
  console.log(`\n📦 Total image size: ${(totalSize / 1024 / 1024).toFixed(1)} MB`);
  console.log(`✅ Done! ${processed} niches processed.\n`);
}

main().catch(console.error);
