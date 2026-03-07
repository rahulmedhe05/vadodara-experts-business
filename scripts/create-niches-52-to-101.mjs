import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

const md = fs.readFileSync(path.join(ROOT, "all-200-niches-keywords.md"), "utf8");
const sections = md.split(/\n---/);

// Niches 52-101 (50 niches)
const nichesToProcess = [
  { slug: "gst-consultancy", name: "GST Consultancy", header: "Niche 52: GST Consultancy" },
  { slug: "income-tax-consultancy", name: "Income Tax Consultancy", header: "Niche 53: Income Tax Consultancy" },
  { slug: "company-registration-services", name: "Company Registration Services", header: "Niche 54: Company Registration Services" },
  { slug: "trademark-registration-services", name: "Trademark Registration Services", header: "Niche 55: Trademark Registration Services" },
  { slug: "iso-certification-consultancy", name: "ISO Certification Consultancy", header: "Niche 56: ISO Certification Consultancy" },
  { slug: "loan-consultancy-services", name: "Loan Consultancy Services", header: "Niche 57: Loan Consultancy Services" },
  { slug: "home-loan-consultancy", name: "Home Loan Consultancy", header: "Niche 58: Home Loan Consultancy" },
  { slug: "mortgage-loan-consultancy", name: "Mortgage Loan Consultancy", header: "Niche 59: Mortgage Loan Consultancy" },
  { slug: "personal-loan-consultancy", name: "Personal Loan Consultancy", header: "Niche 60: Personal Loan Consultancy" },
  { slug: "insurance-consultancy", name: "Insurance Consultancy", header: "Niche 61: Insurance Consultancy" },
  { slug: "legal-services", name: "Legal Services", header: "Niche 62: Legal Services" },
  { slug: "property-legal-services", name: "Property Legal Services", header: "Niche 63: Property Legal Services" },
  { slug: "real-estate-agents", name: "Real Estate Agents", header: "Niche 64: Real Estate Agents" },
  { slug: "property-valuation-services", name: "Property Valuation Services", header: "Niche 65: Property Valuation Services" },
  { slug: "property-documentation-services", name: "Property Documentation Services", header: "Niche 66: Property Documentation Services" },
  { slug: "property-management-services", name: "Property Management Services", header: "Niche 67: Property Management Services" },
  { slug: "architecture-firms", name: "Architecture Firms", header: "Niche 68: Architecture Firms" },
  { slug: "construction-contractors", name: "Construction Contractors", header: "Niche 69: Construction Contractors" },
  { slug: "civil-contractors", name: "Civil Contractors", header: "Niche 70: Civil Contractors" },
  { slug: "structural-engineering-services", name: "Structural Engineering Services", header: "Niche 71: Structural Engineering Services" },
  { slug: "landscape-architecture", name: "Landscape Architecture", header: "Niche 72: Landscape Architecture" },
  { slug: "event-management-services", name: "Event Management Services", header: "Niche 73: Event Management Services" },
  { slug: "wedding-planning-services", name: "Wedding Planning Services", header: "Niche 74: Wedding Planning Services" },
  { slug: "wedding-photography", name: "Wedding Photography", header: "Niche 75: Wedding Photography" },
  { slug: "pre-wedding-photography", name: "Pre-Wedding Photography", header: "Niche 76: Pre-Wedding Photography" },
  { slug: "corporate-photography", name: "Corporate Photography", header: "Niche 77: Corporate Photography" },
  { slug: "videography-services", name: "Videography Services", header: "Niche 78: Videography Services" },
  { slug: "catering-services", name: "Catering Services", header: "Niche 79: Catering Services" },
  { slug: "decoration-services", name: "Decoration Services", header: "Niche 80: Decoration Services" },
  { slug: "sound-lighting-services", name: "Sound & Lighting Services", header: "Niche 81: Sound & Lighting Services" },
  { slug: "gym-fitness-trainers", name: "Gym & Fitness Trainers", header: "Niche 82: Gym & Fitness Trainers" },
  { slug: "personal-training-services", name: "Personal Training Services", header: "Niche 83: Personal Training Services" },
  { slug: "yoga-classes", name: "Yoga Classes", header: "Niche 84: Yoga Classes" },
  { slug: "physiotherapy-clinics", name: "Physiotherapy Clinics", header: "Niche 85: Physiotherapy Clinics" },
  { slug: "diagnostic-labs", name: "Diagnostic Labs", header: "Niche 86: Diagnostic Labs" },
  { slug: "dental-clinics", name: "Dental Clinics", header: "Niche 87: Dental Clinics" },
  { slug: "dermatology-clinics", name: "Dermatology Clinics", header: "Niche 88: Dermatology Clinics" },
  { slug: "hair-transplant-clinics", name: "Hair Transplant Clinics", header: "Niche 89: Hair Transplant Clinics" },
  { slug: "eye-hospitals", name: "Eye Hospitals", header: "Niche 90: Eye Hospitals" },
  { slug: "ivf-clinics", name: "IVF Clinics", header: "Niche 91: IVF Clinics" },
  { slug: "veterinary-clinics", name: "Veterinary Clinics", header: "Niche 92: Veterinary Clinics" },
  { slug: "pet-grooming-services", name: "Pet Grooming Services", header: "Niche 93: Pet Grooming Services" },
  { slug: "pet-boarding-services", name: "Pet Boarding Services", header: "Niche 94: Pet Boarding Services" },
  { slug: "astrology-consultancy", name: "Astrology Consultancy", header: "Niche 95: Astrology Consultancy" },
  { slug: "vastu-consultancy", name: "Vastu Consultancy", header: "Niche 96: Vastu Consultancy" },
  { slug: "numerology-consultancy", name: "Numerology Consultancy", header: "Niche 97: Numerology Consultancy" },
  { slug: "coaching-classes", name: "Coaching Classes", header: "Niche 98: Coaching Classes" },
  { slug: "spoken-english-classes", name: "Spoken English Classes", header: "Niche 99: Spoken English Classes" },
  { slug: "study-abroad-consultants", name: "Study Abroad Consultants", header: "Niche 100: Study Abroad Consultants" },
  { slug: "commercial-interior-design", name: "Commercial Interior Design", header: "Niche 101: Commercial Interior Design" },
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
console.log(`  Niches processed: ${totalNiches}/50`);
console.log(`  Keyword pages created: ${totalKeywords}`);
console.log(`  Total pages: ${totalNiches} niche + ${totalKeywords} keyword = ${totalNiches + totalKeywords}`);
if (failed.length > 0) {
  console.log(`  FAILED: ${failed.join(", ")}`);
}
console.log(`${"=".repeat(60)}`);
