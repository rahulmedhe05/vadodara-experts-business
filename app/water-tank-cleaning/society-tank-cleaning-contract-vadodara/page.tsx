import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Society tank cleaning contract in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional society tank cleaning contract services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/society-tank-cleaning-contract-vadodara" },
  openGraph: {
    title: "Society tank cleaning contract in Vadodara | VadodaraExperts",
    description: "Professional society tank cleaning contract services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/society-tank-cleaning-contract-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="society-tank-cleaning-contract-vadodara" />;
}
