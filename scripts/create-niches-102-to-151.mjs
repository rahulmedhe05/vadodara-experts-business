import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

const md = fs.readFileSync(path.join(ROOT, "all-200-niches-keywords.md"), "utf8");
const sections = md.split(/\n---/);

// Niches 102-151 (50 niches)
const nichesToProcess = [
  { slug: "office-interior-design", name: "Office Interior Design", header: "Niche 102: Office Interior Design" },
  { slug: "restaurant-interior-design", name: "Restaurant Interior Design", header: "Niche 103: Restaurant Interior Design" },
  { slug: "hotel-interior-design", name: "Hotel Interior Design", header: "Niche 104: Hotel Interior Design" },
  { slug: "hospital-interior-design", name: "Hospital Interior Design", header: "Niche 105: Hospital Interior Design" },
  { slug: "retail-store-interior-design", name: "Retail Store Interior Design", header: "Niche 106: Retail Store Interior Design" },
  { slug: "warehouse-interior-design", name: "Warehouse Interior Design", header: "Niche 107: Warehouse Interior Design" },
  { slug: "industrial-interior-design", name: "Industrial Interior Design", header: "Niche 108: Industrial Interior Design" },
  { slug: "prefabricated-building-construction", name: "Prefabricated Building Construction", header: "Niche 109: Prefabricated Building Construction" },
  { slug: "container-house-construction", name: "Container House Construction", header: "Niche 110: Container House Construction" },
  { slug: "luxury-villa-construction", name: "Luxury Villa Construction", header: "Niche 111: Luxury Villa Construction" },
  { slug: "smart-home-construction", name: "Smart Home Construction", header: "Niche 112: Smart Home Construction" },
  { slug: "parking-system-installation", name: "Parking System Installation", header: "Niche 113: Parking System Installation" },
  { slug: "building-demolition-services", name: "Building Demolition Services", header: "Niche 114: Building Demolition Services" },
  { slug: "land-survey-services", name: "Land Survey Services", header: "Niche 115: Land Survey Services" },
  { slug: "soil-testing-services", name: "Soil Testing Services", header: "Niche 116: Soil Testing Services" },
  { slug: "construction-project-management", name: "Construction Project Management", header: "Niche 117: Construction Project Management" },
  { slug: "interior-fit-out-contractors", name: "Interior Fit-Out Contractors", header: "Niche 118: Interior Fit-Out Contractors" },
  { slug: "real-estate-investment-consultancy", name: "Real Estate Investment Consultancy", header: "Niche 119: Real Estate Investment Consultancy" },
  { slug: "land-development-consultancy", name: "Land Development Consultancy", header: "Niche 120: Land Development Consultancy" },
  { slug: "township-development-consultancy", name: "Township Development Consultancy", header: "Niche 121: Township Development Consultancy" },
  { slug: "infrastructure-consultancy", name: "Infrastructure Consultancy", header: "Niche 122: Infrastructure Consultancy" },
  { slug: "green-building-consultancy", name: "Green Building Consultancy", header: "Niche 123: Green Building Consultancy" },
  { slug: "energy-audit-consultancy", name: "Energy Audit Consultancy", header: "Niche 124: Energy Audit Consultancy" },
  { slug: "solar-epc-contractors", name: "Solar EPC Contractors", header: "Niche 125: Solar EPC Contractors" },
  { slug: "commercial-solar-installation", name: "Commercial Solar Installation", header: "Niche 126: Commercial Solar Installation" },
  { slug: "industrial-solar-installation", name: "Industrial Solar Installation", header: "Niche 127: Industrial Solar Installation" },
  { slug: "parking-management-systems", name: "Parking Management Systems", header: "Niche 128: Parking Management Systems" },
  { slug: "commercial-property-brokers", name: "Commercial Property Brokers", header: "Niche 129: Commercial Property Brokers" },
  { slug: "industrial-property-brokers", name: "Industrial Property Brokers", header: "Niche 130: Industrial Property Brokers" },
  { slug: "warehouse-leasing-consultancy", name: "Warehouse Leasing Consultancy", header: "Niche 131: Warehouse Leasing Consultancy" },
  { slug: "factory-leasing-consultancy", name: "Factory Leasing Consultancy", header: "Niche 132: Factory Leasing Consultancy" },
  { slug: "property-investment-advisory", name: "Property Investment Advisory", header: "Niche 133: Property Investment Advisory" },
  { slug: "real-estate-legal-advisory", name: "Real Estate Legal Advisory", header: "Niche 134: Real Estate Legal Advisory" },
  { slug: "construction-safety-consultancy", name: "Construction Safety Consultancy", header: "Niche 135: Construction Safety Consultancy" },
  { slug: "building-inspection-services", name: "Building Inspection Services", header: "Niche 136: Building Inspection Services" },
  { slug: "fire-safety-installation", name: "Fire Safety Installation", header: "Niche 137: Fire Safety Installation" },
  { slug: "fire-fighting-system-installation", name: "Fire Fighting System Installation", header: "Niche 138: Fire Fighting System Installation" },
  { slug: "electrical-contractor-services", name: "Electrical Contractor Services", header: "Niche 139: Electrical Contractor Services" },
  { slug: "mechanical-contractor-services", name: "Mechanical Contractor Services", header: "Niche 140: Mechanical Contractor Services" },
  { slug: "plumbing-contractors", name: "Plumbing Contractors", header: "Niche 141: Plumbing Contractors" },
  { slug: "hvac-contractors", name: "HVAC Contractors", header: "Niche 142: HVAC Contractors" },
  { slug: "elevator-maintenance", name: "Elevator Maintenance", header: "Niche 143: Elevator Maintenance" },
  { slug: "industrial-shed-construction", name: "Industrial Shed Construction", header: "Niche 144: Industrial Shed Construction" },
  { slug: "steel-structure-construction", name: "Steel Structure Construction", header: "Niche 145: Steel Structure Construction" },
  { slug: "roofing-contractors", name: "Roofing Contractors", header: "Niche 146: Roofing Contractors" },
  { slug: "waterproof-membrane-installation", name: "Waterproof Membrane Installation", header: "Niche 147: Waterproof Membrane Installation" },
  { slug: "glass-facade-installation", name: "Glass Facade Installation", header: "Niche 148: Glass Facade Installation" },
  { slug: "aluminium-facade-installation", name: "Aluminium Facade Installation", header: "Niche 149: Aluminium Facade Installation" },
  { slug: "building-automation-systems", name: "Building Automation Systems", header: "Niche 150: Building Automation Systems" },
  { slug: "industrial-automation", name: "Industrial Automation", header: "Niche 151: Industrial Automation" },
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
console.log(`  Niches processed: ${totalNiches}/50`);
console.log(`  Keyword pages created: ${totalKeywords}`);
console.log(`  Total pages: ${totalNiches} niche + ${totalKeywords} keyword = ${totalNiches + totalKeywords}`);
if (failed.length > 0) {
  console.log(`  FAILED: ${failed.join(", ")}`);
}
console.log(`${"=".repeat(60)}`);
