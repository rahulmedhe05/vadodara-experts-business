import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app", "ac-services");

// Read the markdown file
const md = fs.readFileSync(path.join(ROOT, "all-200-niches-keywords.md"), "utf8");

// Extract AC Services section (from start to the first --- separator)
const acSection = md.split("---")[0];

// Parse all numbered keywords like "1. AC repair Vadodara"
const lines = acSection.match(/^\d+\.\s+(.+)$/gm);
const keywords = lines.map((line) => line.replace(/^\d+\.\s+/, "").trim());

console.log(`Extracted ${keywords.length} keywords from markdown:\n`);

// Convert keyword to URL slug
function toSlug(keyword) {
  return keyword
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

let count = 0;

for (const kw of keywords) {
  const slug = toSlug(kw);
  const title = kw.replace(/\s+Vadodara$/i, "").trim();
  const kwDir = path.join(APP_DIR, slug);
  fs.mkdirSync(kwDir, { recursive: true });

  const page = `import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "${title} in Vadodara | AC Services | VadodaraExperts",
  description: "Professional ${title.toLowerCase()} services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/${slug}" },
  openGraph: {
    title: "${title} in Vadodara | VadodaraExperts",
    description: "Professional ${title.toLowerCase()} services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/${slug}",
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
  count++;
  console.log(`${count}. ${kw} -> /${slug}/`);
}

console.log(`\nDone! Created ${count} keyword folders under app/ac-services/`);
