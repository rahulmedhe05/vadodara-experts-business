import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

const md = fs.readFileSync(path.join(ROOT, "all-200-niches-keywords.md"), "utf8");
const sections = md.split(/\n---/);

// Niches 12-51 (40 niches)
const nichesToProcess = [
  { slug: "water-tank-cleaning", name: "Water Tank Cleaning", header: "Niche 12: Water Tank Cleaning" },
  { slug: "sofa-cleaning-services", name: "Sofa Cleaning Services", header: "Niche 13: Sofa Cleaning Services" },
  { slug: "carpet-cleaning-services", name: "Carpet Cleaning Services", header: "Niche 14: Carpet Cleaning Services" },
  { slug: "kitchen-chimney-services", name: "Kitchen Chimney Services", header: "Niche 15: Kitchen Chimney Services" },
  { slug: "cctv-installation-services", name: "CCTV Installation Services", header: "Niche 16: CCTV Installation Services" },
  { slug: "home-security-systems", name: "Home Security Systems", header: "Niche 17: Home Security Systems" },
  { slug: "smart-home-automation", name: "Smart Home Automation", header: "Niche 18: Smart Home Automation" },
  { slug: "solar-panel-installation", name: "Solar Panel Installation", header: "Niche 19: Solar Panel Installation" },
  { slug: "inverter-battery-services", name: "Inverter & Battery Services", header: "Niche 20: Inverter & Battery Services" },
  { slug: "generator-installation-services", name: "Generator Installation Services", header: "Niche 21: Generator Installation Services" },
  { slug: "home-painting-services", name: "Home Painting Services", header: "Niche 22: Home Painting Services" },
  { slug: "waterproofing-services", name: "Waterproofing Services", header: "Niche 23: Waterproofing Services" },
  { slug: "false-ceiling-services", name: "False Ceiling Services", header: "Niche 24: False Ceiling Services" },
  { slug: "tile-installation-services", name: "Tile Installation Services", header: "Niche 25: Tile Installation Services" },
  { slug: "marble-granite-services", name: "Marble & Granite Services", header: "Niche 26: Marble & Granite Services" },
  { slug: "carpenter-services", name: "Carpenter Services", header: "Niche 27: Carpenter Services" },
  { slug: "furniture-repair-services", name: "Furniture Repair Services", header: "Niche 28: Furniture Repair Services" },
  { slug: "aluminium-glass-work", name: "Aluminium & Glass Work", header: "Niche 29: Aluminium & Glass Work" },
  { slug: "curtain-blinds-installation", name: "Curtain & Blinds Installation", header: "Niche 30: Curtain & Blinds Installation" },
  { slug: "mosquito-net-installation", name: "Mosquito Net Installation", header: "Niche 31: Mosquito Net Installation" },
  { slug: "balcony-renovation-services", name: "Balcony Renovation Services", header: "Niche 32: Balcony Renovation Services" },
  { slug: "modular-kitchen-services", name: "Modular Kitchen Services", header: "Niche 33: Modular Kitchen Services" },
  { slug: "wardrobe-installation-services", name: "Wardrobe Installation Services", header: "Niche 34: Wardrobe Installation Services" },
  { slug: "interior-design-services", name: "Interior Design Services", header: "Niche 35: Interior Design Services" },
  { slug: "home-renovation-services", name: "Home Renovation Services", header: "Niche 36: Home Renovation Services" },
  { slug: "building-maintenance-services", name: "Building Maintenance Services", header: "Niche 37: Building Maintenance Services" },
  { slug: "facility-management-services", name: "Facility Management Services", header: "Niche 38: Facility Management Services" },
  { slug: "security-guard-services", name: "Security Guard Services", header: "Niche 39: Security Guard Services" },
  { slug: "lift-installation-services", name: "Lift Installation Services", header: "Niche 40: Lift Installation Services" },
  { slug: "escalator-installation", name: "Escalator Installation", header: "Niche 41: Escalator Installation" },
  { slug: "ev-charging-installation", name: "EV Charging Installation", header: "Niche 42: EV Charging Installation" },
  { slug: "borewell-drilling-services", name: "Borewell Drilling Services", header: "Niche 43: Borewell Drilling Services" },
  { slug: "water-pump-services", name: "Water Pump Services", header: "Niche 44: Water Pump Services" },
  { slug: "tanker-water-supply", name: "Tanker Water Supply", header: "Niche 45: Tanker Water Supply" },
  { slug: "garbage-collection-contractors", name: "Garbage Collection Contractors", header: "Niche 46: Garbage Collection Contractors" },
  { slug: "garden-landscaping-services", name: "Garden Landscaping Services", header: "Niche 47: Garden Landscaping Services" },
  { slug: "tree-cutting-services", name: "Tree Cutting Services", header: "Niche 48: Tree Cutting Services" },
  { slug: "swimming-pool-construction", name: "Swimming Pool Construction", header: "Niche 49: Swimming Pool Construction" },
  { slug: "terrace-garden-services", name: "Terrace Garden Services", header: "Niche 50: Terrace Garden Services" },
  { slug: "chartered-accountant-services", name: "Chartered Accountant Services", header: "Niche 51: Chartered Accountant Services" },
];

function toSlug(keyword) {
  return keyword
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function findNicheSection(header) {
  for (const section of sections) {
    if (section.includes(header)) {
      const hasKeywords = section.match(/^\d+\.\s+(.+)$/gm);
      if (hasKeywords && hasKeywords.length > 0) {
        return section;
      }
    }
  }
  return null;
}

function extractKeywords(section) {
  const lines = section.match(/^\d+\.\s+(.+)$/gm);
  if (!lines) return [];
  return lines.map((line) => line.replace(/^\d+\.\s+/, "").trim());
}

let totalNiches = 0;
let totalKeywords = 0;
const failed = [];

for (const niche of nichesToProcess) {
  const section = findNicheSection(niche.header);
  if (!section) {
    console.log(`  ERROR: "${niche.header}" not found!`);
    failed.push(niche.name);
    continue;
  }

  const keywords = extractKeywords(section);
  if (keywords.length === 0) {
    console.log(`  ERROR: 0 keywords for "${niche.header}"!`);
    failed.push(niche.name);
    continue;
  }

  const nicheDir = path.join(APP_DIR, niche.slug);

  // Delete existing sub-folders
  if (fs.existsSync(nicheDir)) {
    const existing = fs.readdirSync(nicheDir, { withFileTypes: true });
    const dirs = existing.filter((e) => e.isDirectory());
    if (dirs.length > 0) {
      for (const dir of dirs) {
        fs.rmSync(path.join(nicheDir, dir.name), { recursive: true });
      }
    }
  }

  fs.mkdirSync(nicheDir, { recursive: true });

  // Create main niche page
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

  // Create keyword pages
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
console.log(`  Niches processed: ${totalNiches}/40`);
console.log(`  Keyword pages created: ${totalKeywords}`);
console.log(`  Total pages: ${totalNiches} niche + ${totalKeywords} keyword = ${totalNiches + totalKeywords}`);
if (failed.length > 0) {
  console.log(`  FAILED: ${failed.join(", ")}`);
}
console.log(`${"=".repeat(60)}`);
