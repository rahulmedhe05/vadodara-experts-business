import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

// The 50 new niches that need keyword pages generated
const newNiches = [
  { slug: "3d-printing-services", name: "3D Printing Services" },
  { slug: "abrasive-grinding-suppliers", name: "Abrasive Grinding Suppliers" },
  { slug: "bearing-dealers", name: "Bearing Dealers" },
  { slug: "boiler-services", name: "Boiler Services" },
  { slug: "cable-tray-services", name: "Cable Tray Services" },
  { slug: "calibration-services", name: "Calibration Services" },
  { slug: "chemical-manufacturing", name: "Chemical Manufacturing" },
  { slug: "commercial-pest-control", name: "Commercial Pest Control" },
  { slug: "compressor-parts-services", name: "Compressor Parts Services" },
  { slug: "conveyor-belt-services", name: "Conveyor Belt Services" },
  { slug: "crane-hoist-services", name: "Crane Hoist Services" },
  { slug: "crane-rental-services", name: "Crane Rental Services" },
  { slug: "digital-marketing-services", name: "Digital Marketing Services" },
  { slug: "electric-motor-services", name: "Electric Motor Services" },
  { slug: "electrical-contracting-services", name: "Electrical Contracting Services" },
  { slug: "escalator-maintenance-services", name: "Escalator Maintenance Services" },
  { slug: "fastener-suppliers", name: "Fastener Suppliers" },
  { slug: "furniture-manufacturing-services", name: "Furniture Manufacturing Services" },
  { slug: "heat-treatment-services", name: "Heat Treatment Services" },
  { slug: "hydraulic-equipment-suppliers", name: "Hydraulic Equipment Suppliers" },
  { slug: "industrial-cleaning-services", name: "Industrial Cleaning Services" },
  { slug: "industrial-furnace-services", name: "Industrial Furnace Services" },
  { slug: "industrial-gearbox-services", name: "Industrial Gearbox Services" },
  { slug: "industrial-paint-services", name: "Industrial Paint Services" },
  { slug: "industrial-safety-equipment", name: "Industrial Safety Equipment" },
  { slug: "instrumentation-services", name: "Instrumentation Services" },
  { slug: "lubricant-suppliers", name: "Lubricant Suppliers" },
  { slug: "material-testing-services", name: "Material Testing Services" },
  { slug: "packaging-machinery-services", name: "Packaging Machinery Services" },
  { slug: "packaging-material-suppliers", name: "Packaging Material Suppliers" },
  { slug: "packing-moving-services", name: "Packing Moving Services" },
  { slug: "painting-contractors", name: "Painting Contractors" },
  { slug: "piping-fitting-suppliers", name: "Piping Fitting Suppliers" },
  { slug: "plastic-moulding-services", name: "Plastic Moulding Services" },
  { slug: "pneumatic-equipment-services", name: "Pneumatic Equipment Services" },
  { slug: "printing-branding-services", name: "Printing Branding Services" },
  { slug: "rainwater-harvesting-services", name: "Rainwater Harvesting Services" },
  { slug: "road-construction-contractors", name: "Road Construction Contractors" },
  { slug: "rubber-product-manufacturers", name: "Rubber Product Manufacturers" },
  { slug: "solar-energy-services", name: "Solar Energy Services" },
  { slug: "stainless-steel-fabrication", name: "Stainless Steel Fabrication" },
  { slug: "structural-steel-fabrication", name: "Structural Steel Fabrication" },
  { slug: "textile-machinery-services", name: "Textile Machinery Services" },
  { slug: "tile-stone-installation", name: "Tile Stone Installation" },
  { slug: "tool-room-services", name: "Tool Room Services" },
  { slug: "transformer-services", name: "Transformer Services" },
  { slug: "water-treatment-services", name: "Water Treatment Services" },
  { slug: "web-development-services", name: "Web Development Services" },
  { slug: "weighing-scale-services", name: "Weighing Scale Services" },
  { slug: "welding-services", name: "Welding Services" },
];

// Same keyword generation as data.ts generateKeywords()
function generateKeywords(slug) {
  const kws = [];
  // 1-15: Modifier prefixes
  kws.push(`best-${slug}`);
  kws.push(`affordable-${slug}`);
  kws.push(`top-${slug}`);
  kws.push(`cheap-${slug}`);
  kws.push(`professional-${slug}`);
  kws.push(`emergency-${slug}`);
  kws.push(`24-hour-${slug}`);
  kws.push(`trusted-${slug}`);
  kws.push(`reliable-${slug}`);
  kws.push(`experienced-${slug}`);
  kws.push(`licensed-${slug}`);
  kws.push(`certified-${slug}`);
  kws.push(`top-rated-${slug}`);
  kws.push(`verified-${slug}`);
  kws.push(`local-${slug}`);
  // 16-30: Suffix intent keywords
  kws.push(`${slug}-near-me`);
  kws.push(`${slug}-cost`);
  kws.push(`${slug}-price`);
  kws.push(`${slug}-price-list`);
  kws.push(`${slug}-charges`);
  kws.push(`${slug}-rates`);
  kws.push(`${slug}-quotation`);
  kws.push(`${slug}-free-estimate`);
  kws.push(`${slug}-reviews`);
  kws.push(`${slug}-ratings`);
  kws.push(`${slug}-contact-number`);
  kws.push(`${slug}-phone-number`);
  kws.push(`${slug}-whatsapp-number`);
  kws.push(`${slug}-online-booking`);
  kws.push(`${slug}-at-home`);
  // 31-45: Use-case / location type
  kws.push(`${slug}-for-home`);
  kws.push(`${slug}-for-office`);
  kws.push(`${slug}-for-commercial`);
  kws.push(`${slug}-for-residential`);
  kws.push(`${slug}-for-industrial`);
  kws.push(`${slug}-for-apartment`);
  kws.push(`${slug}-for-bungalow`);
  kws.push(`${slug}-for-villa`);
  kws.push(`${slug}-for-shop`);
  kws.push(`${slug}-for-factory`);
  kws.push(`${slug}-for-hospital`);
  kws.push(`${slug}-for-school`);
  kws.push(`${slug}-for-restaurant`);
  kws.push(`${slug}-for-hotel`);
  kws.push(`${slug}-for-warehouse`);
  // 46-60: Service type variations
  kws.push(`${slug}-consultation`);
  kws.push(`${slug}-inspection`);
  kws.push(`${slug}-maintenance`);
  kws.push(`${slug}-installation`);
  kws.push(`${slug}-replacement`);
  kws.push(`${slug}-repair`);
  kws.push(`${slug}-upgrade`);
  kws.push(`${slug}-servicing`);
  kws.push(`${slug}-amc`);
  kws.push(`${slug}-annual-contract`);
  kws.push(`${slug}-one-time`);
  kws.push(`${slug}-subscription`);
  kws.push(`${slug}-on-demand`);
  kws.push(`${slug}-same-day`);
  kws.push(`${slug}-express`);
  // 61-75: Business/provider keywords
  kws.push(`${slug}-company`);
  kws.push(`${slug}-contractor`);
  kws.push(`${slug}-expert`);
  kws.push(`${slug}-specialist`);
  kws.push(`${slug}-provider`);
  kws.push(`${slug}-agency`);
  kws.push(`${slug}-firm`);
  kws.push(`${slug}-dealer`);
  kws.push(`${slug}-supplier`);
  kws.push(`${slug}-vendor`);
  kws.push(`${slug}-technician`);
  kws.push(`${slug}-professional`);
  kws.push(`${slug}-consultant`);
  kws.push(`${slug}-team`);
  kws.push(`${slug}-workers`);
  // 76-90: Action / comparison / decision keywords
  kws.push(`hire-${slug}`);
  kws.push(`book-${slug}`);
  kws.push(`find-${slug}`);
  kws.push(`compare-${slug}`);
  kws.push(`${slug}-vs-alternatives`);
  kws.push(`${slug}-benefits`);
  kws.push(`${slug}-advantages`);
  kws.push(`${slug}-process`);
  kws.push(`${slug}-checklist`);
  kws.push(`${slug}-guide`);
  kws.push(`${slug}-tips`);
  kws.push(`${slug}-faq`);
  kws.push(`${slug}-warranty`);
  kws.push(`${slug}-guarantee`);
  kws.push(`${slug}-discount`);
  // 91-100: Long-tail / buyer intent
  kws.push(`${slug}-with-material`);
  kws.push(`${slug}-low-cost`);
  kws.push(`${slug}-high-quality`);
  kws.push(`${slug}-fast-service`);
  kws.push(`${slug}-weekend-service`);
  kws.push(`${slug}-new-construction`);
  kws.push(`${slug}-old-building`);
  kws.push(`${slug}-government-approved`);
  kws.push(`${slug}-latest-technology`);
  kws.push(`${slug}-eco-friendly`);
  return kws.slice(0, 100);
}

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

let totalNiches = 0;
let totalKeywords = 0;

for (const niche of newNiches) {
  const nicheDir = path.join(APP_DIR, niche.slug);
  fs.mkdirSync(nicheDir, { recursive: true });

  // Create niche root page.tsx
  const nichePage = `import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("${niche.slug}")!;

export const metadata: Metadata = {
  title: "${niche.name} in Vadodara | VadodaraExperts",
  description: "Find the best ${niche.name.toLowerCase()} in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/${niche.slug}" },
  openGraph: {
    title: "${niche.name} in Vadodara | VadodaraExperts",
    description: "Find the best ${niche.name.toLowerCase()} in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/${niche.slug}",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
`;
  fs.writeFileSync(path.join(nicheDir, "page.tsx"), nichePage);

  // Generate keyword sub-pages
  const keywords = generateKeywords(niche.slug);
  let kwCount = 0;

  for (const kw of keywords) {
    const kwSlug = `${kw}-vadodara`;
    const title = slugToTitle(kw);
    const kwDir = path.join(nicheDir, kwSlug);
    fs.mkdirSync(kwDir, { recursive: true });

    const page = `import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("${niche.slug}")!;

export const metadata: Metadata = {
  title: "${title} in Vadodara | ${niche.name} | VadodaraExperts",
  description: "Professional ${title.toLowerCase()} services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/${niche.slug}/${kwSlug}" },
  openGraph: {
    title: "${title} in Vadodara | VadodaraExperts",
    description: "Professional ${title.toLowerCase()} services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/${niche.slug}/${kwSlug}",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="${kwSlug}" />;
}
`;
    fs.writeFileSync(path.join(kwDir, "page.tsx"), page);
    kwCount++;
  }

  console.log(`  ✓ ${niche.name} (/${niche.slug}/) — ${kwCount} keywords`);
  totalNiches++;
  totalKeywords += kwCount;
}

console.log(`\n${"=".repeat(60)}`);
console.log(`COMPLETE!`);
console.log(`  Niches processed: ${totalNiches}/50`);
console.log(`  Keyword pages created: ${totalKeywords}`);
console.log(`${"=".repeat(60)}`);

// Update niche-keywords.ts
const nicheKwPath = path.join(ROOT, "lib", "niche-keywords.ts");
let existingContent = "";
if (fs.existsSync(nicheKwPath)) {
  existingContent = fs.readFileSync(nicheKwPath, "utf-8");
}

// Parse existing entries
const existingMatch = existingContent.match(/export const nicheKeywords[^{]*(\{[\s\S]*\});?\s*$/);
let allEntries = {};
if (existingMatch) {
  // Extract existing niche-keyword map entries
  const entriesBlock = existingContent.slice(
    existingContent.indexOf("{", existingContent.indexOf("nicheKeywords")),
  );
  // Simple parse: just keep existing content and append new
}

// Build new entries for the 50 niches
const newEntries = [];
for (const niche of newNiches) {
  const keywords = generateKeywords(niche.slug);
  const kwSlugs = keywords.map((k) => `${k}-vadodara`);
  newEntries.push(`  "${niche.slug}": [\n${kwSlugs.map((k) => `    "${k}"`).join(",\n")}\n  ]`);
}

// If file exists, insert before closing };
if (existingContent.includes("nicheKeywords")) {
  const insertPoint = existingContent.lastIndexOf("};");
  if (insertPoint > -1) {
    const before = existingContent.slice(0, insertPoint).trimEnd();
    const needsComma = before.endsWith("]");
    const updated = before + (needsComma ? ",\n" : "\n") + newEntries.join(",\n") + "\n};\n";
    fs.writeFileSync(nicheKwPath, updated);
    console.log(`\n✓ Updated lib/niche-keywords.ts with ${newNiches.length} new entries`);
  }
} else {
  // Create from scratch
  const content = `// Auto-generated: actual keyword slugs for each niche\n// Maps niche slug -> array of keyword page slugs\n\nexport const nicheKeywords: Record<string, string[]> = {\n${newEntries.join(",\n")}\n};\n`;
  fs.writeFileSync(nicheKwPath, content);
  console.log(`\n✓ Created lib/niche-keywords.ts with ${newNiches.length} entries`);
}
