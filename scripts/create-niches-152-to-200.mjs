import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

const md = fs.readFileSync(path.join(ROOT, "all-200-niches-keywords.md"), "utf8");

// Niches 152-190: direct match with markdown "Niche N:" headers
const directNiches = [
  { slug: "plc-programming-services", name: "PLC Programming Services", header: "Niche 152: PLC Programming Services" },
  { slug: "scada-system-integration", name: "SCADA System Integration", header: "Niche 153: SCADA System Integration" },
  { slug: "industrial-electrical-contractors", name: "Industrial Electrical Contractors", header: "Niche 154: Industrial Electrical Contractors" },
  { slug: "industrial-hvac-systems", name: "Industrial HVAC Systems", header: "Niche 155: Industrial HVAC Systems" },
  { slug: "industrial-boiler-systems", name: "Industrial Boiler Systems", header: "Niche 156: Industrial Boiler Systems" },
  { slug: "water-treatment-plants", name: "Water Treatment Plants", header: "Niche 157: Water Treatment Plants" },
  { slug: "effluent-treatment-plants", name: "Effluent Treatment Plants", header: "Niche 158: Effluent Treatment Plants" },
  { slug: "sewage-treatment-plants", name: "Sewage Treatment Plants", header: "Niche 159: Sewage Treatment Plants" },
  { slug: "industrial-ro-plants", name: "Industrial RO Plants", header: "Niche 160: Industrial RO Plants" },
  { slug: "cooling-tower-systems", name: "Cooling Tower Systems", header: "Niche 161: Cooling Tower Systems" },
  { slug: "air-compressor-suppliers", name: "Air Compressor Suppliers", header: "Niche 162: Air Compressor Suppliers" },
  { slug: "industrial-pump-suppliers", name: "Industrial Pump Suppliers", header: "Niche 163: Industrial Pump Suppliers" },
  { slug: "industrial-valve-suppliers", name: "Industrial Valve Suppliers", header: "Niche 164: Industrial Valve Suppliers" },
  { slug: "industrial-generator-suppliers", name: "Industrial Generator Suppliers", header: "Niche 165: Industrial Generator Suppliers" },
  { slug: "steel-fabrication-services", name: "Steel Fabrication Services", header: "Niche 166: Steel Fabrication Services" },
  { slug: "sheet-metal-fabrication", name: "Sheet Metal Fabrication", header: "Niche 167: Sheet Metal Fabrication" },
  { slug: "cnc-machining-services", name: "CNC Machining Services", header: "Niche 168: CNC Machining Services" },
  { slug: "laser-cutting-services", name: "Laser Cutting Services", header: "Niche 169: Laser Cutting Services" },
  { slug: "powder-coating-services", name: "Powder Coating Services", header: "Niche 170: Powder Coating Services" },
  { slug: "electroplating-services", name: "Electroplating Services", header: "Niche 171: Electroplating Services" },
  { slug: "anodizing-services", name: "Anodizing Services", header: "Niche 172: Anodizing Services" },
  { slug: "industrial-painting-contractors", name: "Industrial Painting Contractors", header: "Niche 173: Industrial Painting Contractors" },
  { slug: "industrial-insulation-services", name: "Industrial Insulation Services", header: "Niche 174: Industrial Insulation Services" },
  { slug: "epoxy-flooring-services", name: "Epoxy Flooring Services", header: "Niche 175: Epoxy Flooring Services" },
  { slug: "warehouse-construction", name: "Warehouse Construction", header: "Niche 176: Warehouse Construction" },
  { slug: "factory-shed-construction", name: "Factory Shed Construction", header: "Niche 177: Factory Shed Construction" },
  { slug: "peb-building-construction", name: "PEB Building Construction", header: "Niche 178: PEB Building Construction" },
  { slug: "industrial-roofing-systems", name: "Industrial Roofing Systems", header: "Niche 179: Industrial Roofing Systems" },
  { slug: "fire-safety-systems", name: "Fire Safety Systems", header: "Niche 180: Fire Safety Systems" },
  { slug: "industrial-safety-consultancy", name: "Industrial Safety Consultancy", header: "Niche 181: Industrial Safety Consultancy" },
  { slug: "tank-cleaning-services", name: "Tank Cleaning Services", header: "Niche 182: Tank Cleaning Services" },
  { slug: "pipeline-installation-services", name: "Pipeline Installation Services", header: "Niche 183: Pipeline Installation Services" },
  { slug: "industrial-welding-services", name: "Industrial Welding Services", header: "Niche 184: Industrial Welding Services" },
  { slug: "industrial-maintenance-contractors", name: "Industrial Maintenance Contractors", header: "Niche 185: Industrial Maintenance Contractors" },
  { slug: "transformer-repair-services", name: "Transformer Repair Services", header: "Niche 186: Transformer Repair Services" },
  { slug: "electrical-panel-manufacturing", name: "Electrical Panel Manufacturing", header: "Niche 187: Electrical Panel Manufacturing" },
  { slug: "conveyor-system-installation", name: "Conveyor System Installation", header: "Niche 188: Conveyor System Installation" },
  { slug: "industrial-packaging-services", name: "Industrial Packaging Services", header: "Niche 189: Industrial Packaging Services" },
  { slug: "industrial-logistics-services", name: "Industrial Logistics Services", header: "Niche 190: Industrial Logistics Services" },
];

// Niches 191-200: markdown headers differ from data.ts — use alternate headers
const specialNiches = [
  { slug: "freight-forwarding-services", name: "Freight Forwarding Services", header: "Niche 75: Freight Forwarding Services" },
  { slug: "export-consultancy", name: "Export Consultancy", header: "Niche 73: Import Export Consultancy" },
  { slug: "import-consultancy", name: "Import Consultancy", header: "Niche 73: Import Export Consultancy" },
  { slug: "customs-clearance-agents", name: "Customs Clearance Agents", header: "Niche 74: Customs Clearance Services" },
  { slug: "supply-chain-consultancy", name: "Supply Chain Consultancy", header: "Niche 76: Supply Chain Management" },
  { slug: "industrial-land-brokers", name: "Industrial Land Brokers", header: null },
  { slug: "factory-leasing-services", name: "Factory Leasing Services", header: "Niche 132: Factory Leasing Consultancy" },
  { slug: "warehouse-leasing-services", name: "Warehouse Leasing Services", header: "Niche 131: Warehouse Leasing Consultancy" },
  { slug: "industrial-project-consultancy", name: "Industrial Project Consultancy", header: null },
  { slug: "industrial-waste-management", name: "Industrial Waste Management", header: "Niche 86: Industrial Waste Management" },
];

const allNiches = [...directNiches, ...specialNiches];

function toSlug(keyword) {
  return keyword
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function findKeywordsForHeader(header) {
  const lines = md.split("\n");
  let foundHeader = false;
  const keywords = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!foundHeader) {
      if (line.includes(header)) {
        foundHeader = true;
      }
      continue;
    }
    // Stop at next header or separator after collecting keywords
    if (keywords.length > 0 && (line.startsWith("## ") || line.startsWith("### ") || line.trim() === "---")) {
      break;
    }
    const match = line.match(/^\d+\.\s+(.+)$/);
    if (match) {
      keywords.push(match[1].trim());
    }
  }
  return keywords;
}

let totalNiches = 0;
let totalKeywords = 0;
const failed = [];
const skipped = [];

for (const niche of allNiches) {
  if (niche.header === null) {
    console.log(`  SKIP: "${niche.name}" — no matching keywords section found in markdown`);
    skipped.push(niche.name);
    continue;
  }

  const keywords = findKeywordsForHeader(niche.header);
  if (keywords.length === 0) {
    console.log(`  ERROR: 0 keywords for "${niche.header}"!`);
    failed.push(niche.name);
    continue;
  }

  const nicheDir = path.join(APP_DIR, niche.slug);

  // Clean existing keyword sub-folders
  if (fs.existsSync(nicheDir)) {
    const existing = fs.readdirSync(nicheDir, { withFileTypes: true });
    const dirs = existing.filter((e) => e.isDirectory());
    for (const dir of dirs) {
      fs.rmSync(path.join(nicheDir, dir.name), { recursive: true });
    }
  }

  fs.mkdirSync(nicheDir, { recursive: true });

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

  let kwCount = 0;
  for (const kw of keywords) {
    const slug = toSlug(kw);
    const title = kw.replace(/\s+Vadodara$/i, "").trim();
    const kwDir = path.join(nicheDir, slug);
    fs.mkdirSync(kwDir, { recursive: true });

    const page = `import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("${niche.slug}")!;

export const metadata: Metadata = {
  title: "${title} in Vadodara | ${niche.name} | VadodaraExperts",
  description: "Professional ${title.toLowerCase()} services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/${niche.slug}/${slug}" },
  openGraph: {
    title: "${title} in Vadodara | VadodaraExperts",
    description: "Professional ${title.toLowerCase()} services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/${niche.slug}/${slug}",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="${slug}" />;
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
console.log(`  Niches processed: ${totalNiches}/49`);
console.log(`  Keyword pages created: ${totalKeywords}`);
console.log(`  Total pages: ${totalNiches} niche + ${totalKeywords} keyword = ${totalNiches + totalKeywords}`);
if (skipped.length > 0) {
  console.log(`  SKIPPED (no keywords in markdown): ${skipped.join(", ")}`);
}
if (failed.length > 0) {
  console.log(`  FAILED: ${failed.join(", ")}`);
}
console.log(`${"=".repeat(60)}`);
