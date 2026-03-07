import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Bulk water contract in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional bulk water contract services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/bulk-water-contract-vadodara" },
  openGraph: {
    title: "Bulk water contract in Vadodara | VadodaraExperts",
    description: "Professional bulk water contract services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/bulk-water-contract-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bulk-water-contract-vadodara" />;
}
