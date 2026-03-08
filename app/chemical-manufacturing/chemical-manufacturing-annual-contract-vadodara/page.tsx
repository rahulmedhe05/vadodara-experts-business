import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chemical-manufacturing")!;

export const metadata: Metadata = {
  title: "Chemical Manufacturing Annual Contract in Vadodara | Chemical Manufacturing | VadodaraExperts",
  description: "Professional chemical manufacturing annual contract services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-annual-contract-vadodara" },
  openGraph: {
    title: "Chemical Manufacturing Annual Contract in Vadodara | VadodaraExperts",
    description: "Professional chemical manufacturing annual contract services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-annual-contract-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-manufacturing-annual-contract-vadodara" />;
}
