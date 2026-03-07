import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Corporate water supply contract in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional corporate water supply contract services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/corporate-water-supply-contract-vadodara" },
  openGraph: {
    title: "Corporate water supply contract in Vadodara | VadodaraExperts",
    description: "Professional corporate water supply contract services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/corporate-water-supply-contract-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corporate-water-supply-contract-vadodara" />;
}
