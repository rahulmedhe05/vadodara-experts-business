import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

// Read the markdown file
const md = fs.readFileSync(path.join(ROOT, "all-200-niches-keywords.md"), "utf8");

// Define niches 2-11 with their slugs, display names, and section headers in the markdown
const nichesToProcess = [
  { slug: "refrigerator-services", name: "Refrigerator Services", header: "Niche 2: Refrigerator Services" },
  { slug: "washing-machine-services", name: "Washing Machine Services", header: "Niche 3: Washing Machine Services" },
  { slug: "microwave-oven-services", name: "Microwave Oven Services", header: "Niche 4: Microwave Oven Services" },
  { slug: "geyser-services", name: "Geyser Services", header: "Niche 5: Geyser Services" },
  { slug: "water-purifier-services", name: "Water Purifier Services", header: "Niche 6: Water Purifier Services" },
  { slug: "plumbing-services", name: "Plumbing Services", header: "Niche 7: Plumbing Services" },
  { slug: "electrical-services", name: "Electrical Services", header: "Niche 8: Electrical Services" },
  { slug: "pest-control-services", name: "Pest Control Services", header: "Niche 9: Pest Control Services" },
  { slug: "termite-control-services", name: "Termite Control Services", header: "Niche 10: Termite Control Services" },
  { slug: "home-cleaning-services", name: "Home Cleaning Services", header: "Niche 11: Home Cleaning Services" },
];

// Split markdown by --- to get niche sections
const sections = md.split(/\n---\n/);

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
  // Find the section that contains both the header AND numbered keywords
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

for (const niche of nichesToProcess) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`Processing: ${niche.name} (/${niche.slug}/)`);
  console.log(`${"=".repeat(60)}`);

  // Find the section in the markdown
  const section = findNicheSection(niche.header);
  if (!section) {
    console.log(`  ERROR: Could not find section "${niche.header}" in markdown!`);
    continue;
  }

  // Extract keywords
  const keywords = extractKeywords(section);
  console.log(`  Found ${keywords.length} keywords`);

  const nicheDir = path.join(APP_DIR, niche.slug);

  // Delete existing sub-folders
  if (fs.existsSync(nicheDir)) {
    const existing = fs.readdirSync(nicheDir, { withFileTypes: true });
    const dirs = existing.filter((e) => e.isDirectory());
    if (dirs.length > 0) {
      console.log(`  Deleting ${dirs.length} existing sub-folders...`);
      for (const dir of dirs) {
        fs.rmSync(path.join(nicheDir, dir.name), { recursive: true });
      }
    }
  }

  // Create niche directory
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
  console.log(`  Created: /${niche.slug}/page.tsx (main niche page)`);

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

  console.log(`  Created: ${kwCount} keyword sub-folders`);
  totalNiches++;
  totalKeywords += kwCount;
}

console.log(`\n${"=".repeat(60)}`);
console.log(`COMPLETE!`);
console.log(`  Niches processed: ${totalNiches}`);
console.log(`  Keyword pages created: ${totalKeywords}`);
console.log(`  Total pages: ${totalNiches} niche pages + ${totalKeywords} keyword pages = ${totalNiches + totalKeywords}`);
console.log(`${"=".repeat(60)}`);
