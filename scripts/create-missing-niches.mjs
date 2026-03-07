import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

function toSlug(keyword) {
  return keyword
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

const niches = [
  {
    slug: "industrial-land-brokers",
    name: "Industrial Land Brokers",
    keywords: [
      "industrial land broker Vadodara",
      "industrial land agent Vadodara",
      "industrial land dealer Vadodara",
      "industrial plot broker Vadodara",
      "industrial plot agent Vadodara",
      "best industrial land broker Vadodara",
      "industrial land for sale Vadodara",
      "industrial plot for sale Vadodara",
      "industrial land for purchase Vadodara",
      "GIDC plot broker Vadodara",
      "GIDC land agent Vadodara",
      "GIDC plot for sale Vadodara",
      "Makarpura GIDC land broker Vadodara",
      "Nandesari GIDC land broker Vadodara",
      "Halol GIDC land broker Vadodara",
      "Savli GIDC land broker Vadodara",
      "Waghodia GIDC land broker Vadodara",
      "Padra GIDC land broker Vadodara",
      "Gorwa GIDC land broker Vadodara",
      "Bill GIDC land broker Vadodara",
      "industrial zone land broker Vadodara",
      "SEZ land broker Vadodara",
      "special economic zone land Vadodara",
      "free trade zone land Vadodara",
      "industrial estate land broker Vadodara",
      "industrial park land Vadodara",
      "manufacturing zone land Vadodara",
      "factory land broker Vadodara",
      "factory plot for sale Vadodara",
      "factory site broker Vadodara",
      "warehouse land broker Vadodara",
      "warehouse plot for sale Vadodara",
      "godown land broker Vadodara",
      "open land for industry Vadodara",
      "agricultural to industrial land Vadodara",
      "NA plot broker Vadodara",
      "non agricultural land broker Vadodara",
      "industrial NA land Vadodara",
      "land use conversion broker Vadodara",
      "zone conversion consultancy Vadodara",
      "small industrial plot Vadodara",
      "medium industrial plot Vadodara",
      "large industrial land Vadodara",
      "1000 sq yard industrial plot Vadodara",
      "2000 sq yard industrial plot Vadodara",
      "5000 sq meter industrial land Vadodara",
      "1 acre industrial land Vadodara",
      "2 acre industrial land Vadodara",
      "5 acre industrial land Vadodara",
      "10 acre industrial land Vadodara",
      "industrial land near highway Vadodara",
      "industrial land NH8 Vadodara",
      "industrial land near expressway Vadodara",
      "industrial land near railway siding Vadodara",
      "industrial land with road access Vadodara",
      "corner industrial plot Vadodara",
      "industrial land with water supply Vadodara",
      "industrial land with power Vadodara",
      "industrial land with HT connection Vadodara",
      "industrial land with gas pipeline Vadodara",
      "industrial land with ETP facility Vadodara",
      "industrial land with compound wall Vadodara",
      "industrial land for chemical unit Vadodara",
      "industrial land for pharma unit Vadodara",
      "industrial land for food processing Vadodara",
      "industrial land for engineering unit Vadodara",
      "industrial land for textile unit Vadodara",
      "industrial land for automobile unit Vadodara",
      "industrial land for IT park Vadodara",
      "industrial land for logistics park Vadodara",
      "industrial land for cold storage Vadodara",
      "industrial land title verification Vadodara",
      "industrial land due diligence Vadodara",
      "industrial land legal clearance Vadodara",
      "industrial land RERA Vadodara",
      "industrial land valuation Vadodara",
      "industrial land rate Vadodara",
      "industrial plot rate per sq yard Vadodara",
      "industrial land price Vadodara",
      "affordable industrial land Vadodara",
      "cheap industrial plot Vadodara",
      "premium industrial land Vadodara",
      "industrial land investment Vadodara",
      "industrial land joint venture Vadodara",
      "industrial land partnership Vadodara",
      "industrial land resale Vadodara",
      "industrial land lease cum sale Vadodara",
      "GIDC allotment consultancy Vadodara",
      "GIDC transfer consultancy Vadodara",
      "government industrial land allotment Vadodara",
      "GIDc plot registration Vadodara",
      "industrial land stamp duty Vadodara",
      "industrial land registration Vadodara",
      "industrial land documentation Vadodara",
      "industrial land loan advisory Vadodara",
      "industrial land finance Vadodara",
      "industrial land survey Vadodara",
      "industrial land demarcation Vadodara",
      "NRI industrial land advisory Vadodara",
      "industrial land brokerage Vadodara",
      "industrial land broker fee Vadodara",
    ],
  },
  {
    slug: "industrial-project-consultancy",
    name: "Industrial Project Consultancy",
    keywords: [
      "industrial project consultancy Vadodara",
      "industrial project consultant Vadodara",
      "project consultancy services Vadodara",
      "best industrial project consultant Vadodara",
      "industrial project management Vadodara",
      "industrial project planning Vadodara",
      "project feasibility study Vadodara",
      "techno economic feasibility Vadodara",
      "industrial feasibility report Vadodara",
      "detailed project report Vadodara",
      "DPR preparation Vadodara",
      "project report for bank loan Vadodara",
      "project report for MSME Vadodara",
      "project report for GIDC Vadodara",
      "CMA report preparation Vadodara",
      "industrial project finance consultancy Vadodara",
      "term loan project report Vadodara",
      "working capital assessment Vadodara",
      "MUDRA loan project report Vadodara",
      "startup project consultancy Vadodara",
      "new factory setup consultancy Vadodara",
      "factory layout planning Vadodara",
      "plant layout design Vadodara",
      "plant engineering consultancy Vadodara",
      "manufacturing unit setup Vadodara",
      "production line setup Vadodara",
      "assembly line design Vadodara",
      "process engineering consultancy Vadodara",
      "process design Vadodara",
      "process optimization consultancy Vadodara",
      "capacity planning consultancy Vadodara",
      "industrial capacity assessment Vadodara",
      "machinery selection consultancy Vadodara",
      "technology selection consultancy Vadodara",
      "technology transfer consultancy Vadodara",
      "raw material sourcing consultancy Vadodara",
      "vendor development consultancy Vadodara",
      "supply chain setup consultancy Vadodara",
      "utility planning consultancy Vadodara",
      "power requirement planning Vadodara",
      "water requirement planning Vadodara",
      "steam and boiler planning Vadodara",
      "compressed air planning Vadodara",
      "ETP planning consultancy Vadodara",
      "STP planning consultancy Vadodara",
      "pollution control consultancy Vadodara",
      "environmental clearance consultancy Vadodara",
      "consent to establish Vadodara",
      "consent to operate Vadodara",
      "GPCB compliance consultancy Vadodara",
      "industrial licensing consultancy Vadodara",
      "factory license consultancy Vadodara",
      "MSME registration consultancy Vadodara",
      "udyam registration consultancy Vadodara",
      "IEM registration Vadodara",
      "industrial entrepreneur memorandum Vadodara",
      "GIDC allotment consultancy Vadodara",
      "subsidy consultancy Vadodara",
      "government subsidy for industry Vadodara",
      "capital subsidy consultancy Vadodara",
      "interest subsidy consultancy Vadodara",
      "Gujarat industrial policy consultancy Vadodara",
      "incentive scheme consultancy Vadodara",
      "turnkey project consultancy Vadodara",
      "turnkey industrial project Vadodara",
      "EPC project consultancy Vadodara",
      "greenfield project consultancy Vadodara",
      "brownfield project consultancy Vadodara",
      "expansion project consultancy Vadodara",
      "diversification project consultancy Vadodara",
      "modernization project consultancy Vadodara",
      "industrial relocation consultancy Vadodara",
      "cost estimation consultancy Vadodara",
      "project cost estimation Vadodara",
      "capital expenditure planning Vadodara",
      "CAPEX planning Vadodara",
      "project budgeting consultancy Vadodara",
      "project scheduling consultancy Vadodara",
      "project timeline planning Vadodara",
      "PERT CPM consultancy Vadodara",
      "project monitoring consultancy Vadodara",
      "project risk assessment Vadodara",
      "industrial risk consultancy Vadodara",
      "market study for industry Vadodara",
      "market research for project Vadodara",
      "demand supply analysis Vadodara",
      "industrial market analysis Vadodara",
      "competitor analysis consultancy Vadodara",
      "SWOT analysis industrial project Vadodara",
      "break even analysis Vadodara",
      "ROI analysis consultancy Vadodara",
      "payback period analysis Vadodara",
      "IRR NPV analysis Vadodara",
      "financial projection consultancy Vadodara",
      "profitability assessment Vadodara",
      "food processing project consultancy Vadodara",
      "pharma project consultancy Vadodara",
      "chemical plant project consultancy Vadodara",
      "engineering project consultancy Vadodara",
      "textile project consultancy Vadodara",
      "automobile project consultancy Vadodara",
      "industrial project consultancy cost Vadodara",
      "industrial project consultancy fee Vadodara",
    ],
  },
];

let totalNiches = 0;
let totalKeywords = 0;

for (const niche of niches) {
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
  for (const kw of niche.keywords) {
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
console.log(`  Niches processed: ${totalNiches}/2`);
console.log(`  Keyword pages created: ${totalKeywords}`);
console.log(`${"=".repeat(60)}`);
