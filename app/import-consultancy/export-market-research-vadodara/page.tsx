import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Export market research in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional export market research services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/export-market-research-vadodara" },
  openGraph: {
    title: "Export market research in Vadodara | VadodaraExperts",
    description: "Professional export market research services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/export-market-research-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-market-research-vadodara" />;
}
