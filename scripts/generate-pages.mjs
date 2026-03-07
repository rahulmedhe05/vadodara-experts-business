/**
 * Page Generation Script for VadodaraExperts.com
 * Generates 200 niche pages + 20,000 keyword pages (100 per niche)
 * NO area-based keywords — only service/intent keywords + "-vadodara" suffix
 *
 * Run: node scripts/generate-pages.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

// ===== KEYWORD GENERATION (matches lib/data.ts exactly) =====
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

function slugToName(slug) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

// ===== ALL 200 NICHES =====
const nicheList = [
  // 1-50: Home Services
  "ac-services", "refrigerator-services", "washing-machine-services",
  "microwave-oven-services", "geyser-services", "water-purifier-services",
  "plumbing-services", "electrical-services", "pest-control-services",
  "termite-control-services", "home-cleaning-services", "water-tank-cleaning",
  "sofa-cleaning-services", "carpet-cleaning-services", "kitchen-chimney-services",
  "cctv-installation-services", "home-security-systems", "smart-home-automation",
  "solar-panel-installation", "inverter-battery-services",
  "generator-installation-services", "home-painting-services",
  "waterproofing-services", "false-ceiling-services", "tile-installation-services",
  "marble-granite-services", "carpenter-services", "furniture-repair-services",
  "aluminium-glass-work", "curtain-blinds-installation",
  "mosquito-net-installation", "balcony-renovation-services",
  "modular-kitchen-services", "wardrobe-installation-services",
  "interior-design-services", "home-renovation-services",
  "building-maintenance-services", "facility-management-services",
  "security-guard-services", "lift-installation-services",
  "escalator-installation", "ev-charging-installation",
  "borewell-drilling-services", "water-pump-services", "tanker-water-supply",
  "garbage-collection-contractors", "garden-landscaping-services",
  "tree-cutting-services", "swimming-pool-construction", "terrace-garden-services",

  // 51-100: Professional & Local Business
  "chartered-accountant-services", "gst-consultancy", "income-tax-consultancy",
  "company-registration-services", "trademark-registration-services",
  "iso-certification-consultancy", "loan-consultancy-services",
  "home-loan-consultancy", "mortgage-loan-consultancy",
  "personal-loan-consultancy", "insurance-consultancy", "legal-services",
  "property-legal-services", "real-estate-agents", "property-valuation-services",
  "property-documentation-services", "property-management-services",
  "architecture-firms", "construction-contractors", "civil-contractors",
  "structural-engineering-services", "landscape-architecture",
  "event-management-services", "wedding-planning-services",
  "wedding-photography", "pre-wedding-photography", "corporate-photography",
  "videography-services", "catering-services", "decoration-services",
  "sound-lighting-services", "gym-fitness-trainers", "personal-training-services",
  "yoga-classes", "physiotherapy-clinics", "diagnostic-labs", "dental-clinics",
  "dermatology-clinics", "hair-transplant-clinics", "eye-hospitals",
  "ivf-clinics", "veterinary-clinics", "pet-grooming-services",
  "pet-boarding-services", "astrology-consultancy", "vastu-consultancy",
  "numerology-consultancy", "coaching-classes", "spoken-english-classes",
  "study-abroad-consultants",

  // 101-150: Construction & Infrastructure
  "commercial-interior-design", "office-interior-design",
  "restaurant-interior-design", "hotel-interior-design",
  "hospital-interior-design", "retail-store-interior-design",
  "warehouse-interior-design", "industrial-interior-design",
  "prefabricated-building-construction", "container-house-construction",
  "luxury-villa-construction", "smart-home-construction",
  "parking-system-installation", "building-demolition-services",
  "land-survey-services", "soil-testing-services",
  "construction-project-management", "interior-fit-out-contractors",
  "real-estate-investment-consultancy", "land-development-consultancy",
  "township-development-consultancy", "infrastructure-consultancy",
  "green-building-consultancy", "energy-audit-consultancy",
  "solar-epc-contractors", "commercial-solar-installation",
  "industrial-solar-installation", "parking-management-systems",
  "commercial-property-brokers", "industrial-property-brokers",
  "warehouse-leasing-consultancy", "factory-leasing-consultancy",
  "property-investment-advisory", "real-estate-legal-advisory",
  "construction-safety-consultancy", "building-inspection-services",
  "fire-safety-installation", "fire-fighting-system-installation",
  "electrical-contractor-services", "mechanical-contractor-services",
  "plumbing-contractors", "hvac-contractors", "elevator-maintenance",
  "industrial-shed-construction", "steel-structure-construction",
  "roofing-contractors", "waterproof-membrane-installation",
  "glass-facade-installation", "aluminium-facade-installation",
  "building-automation-systems",

  // 151-200: Industrial Services
  "industrial-automation", "plc-programming-services",
  "scada-system-integration", "industrial-electrical-contractors",
  "industrial-hvac-systems", "industrial-boiler-systems",
  "water-treatment-plants", "effluent-treatment-plants",
  "sewage-treatment-plants", "industrial-ro-plants", "cooling-tower-systems",
  "air-compressor-suppliers", "industrial-pump-suppliers",
  "industrial-valve-suppliers", "industrial-generator-suppliers",
  "steel-fabrication-services", "sheet-metal-fabrication",
  "cnc-machining-services", "laser-cutting-services", "powder-coating-services",
  "electroplating-services", "anodizing-services",
  "industrial-painting-contractors", "industrial-insulation-services",
  "epoxy-flooring-services", "warehouse-construction",
  "factory-shed-construction", "peb-building-construction",
  "industrial-roofing-systems", "fire-safety-systems",
  "industrial-safety-consultancy", "tank-cleaning-services",
  "pipeline-installation-services", "industrial-welding-services",
  "industrial-maintenance-contractors", "transformer-repair-services",
  "electrical-panel-manufacturing", "conveyor-system-installation",
  "industrial-packaging-services", "industrial-logistics-services",
  "freight-forwarding-services", "export-consultancy", "import-consultancy",
  "customs-clearance-agents", "supply-chain-consultancy",
  "industrial-land-brokers", "factory-leasing-services",
  "warehouse-leasing-services", "industrial-project-consultancy",
  "industrial-waste-management",
];

// ===== NICHE PAGE TEMPLATE =====
function nichePageContent(slug, name) {
  return `import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("${slug}")!;

export const metadata: Metadata = {
  title: "${name} in Vadodara | VadodaraExperts",
  description: "Find the best ${name.toLowerCase()} in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/${slug}" },
  openGraph: {
    title: "${name} in Vadodara | VadodaraExperts",
    description: "Find the best ${name.toLowerCase()} in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/${slug}",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
`;
}

// ===== KEYWORD PAGE TEMPLATE =====
function keywordPageContent(nicheSlug, nicheName, keyword) {
  const kwTitle = slugToName(keyword);
  return `import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("${nicheSlug}")!;

export const metadata: Metadata = {
  title: "${kwTitle} Vadodara | ${nicheName} | VadodaraExperts",
  description: "Book ${kwTitle.toLowerCase()} services in Vadodara. Fast service and affordable pricing by VadodaraExperts. Call today for a free estimate.",
  alternates: { canonical: "https://vadodaraexperts.com/${nicheSlug}/${keyword}-vadodara" },
  openGraph: {
    title: "${kwTitle} Vadodara | VadodaraExperts",
    description: "Book ${kwTitle.toLowerCase()} services in Vadodara. Professional team, affordable pricing by VadodaraExperts.",
    url: "https://vadodaraexperts.com/${nicheSlug}/${keyword}-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="${keyword}-vadodara" />;
}
`;
}

// ===== MAIN GENERATION =====
function main() {
  let nicheCount = 0;
  let keywordCount = 0;

  console.log("Starting page generation for VadodaraExperts.com...");
  console.log(`Generating pages for ${nicheList.length} niches with 100 keywords each...`);
  console.log("");

  for (const slug of nicheList) {
    const name = slugToName(slug);
    const keywords = generateKeywords(slug);

    // Create niche page directory
    const nicheDir = path.join(APP_DIR, slug);
    fs.mkdirSync(nicheDir, { recursive: true });
    fs.writeFileSync(path.join(nicheDir, "page.tsx"), nichePageContent(slug, name));
    nicheCount++;

    // Create keyword pages
    for (const kw of keywords) {
      const kwDir = path.join(nicheDir, `${kw}-vadodara`);
      fs.mkdirSync(kwDir, { recursive: true });
      fs.writeFileSync(path.join(kwDir, "page.tsx"), keywordPageContent(slug, name, kw));
      keywordCount++;
    }

    if (nicheCount % 10 === 0) {
      console.log(`  ${nicheCount}/${nicheList.length} niches processed (${keywordCount} keyword pages)...`);
    }
  }

  console.log("");
  console.log("Page generation complete!");
  console.log(`   Niche pages: ${nicheCount}`);
  console.log(`   Keyword pages: ${keywordCount}`);
  console.log(`   Total pages: ${nicheCount + keywordCount + 1} (including homepage)`);
}

main();
