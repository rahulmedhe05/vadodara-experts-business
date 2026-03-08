import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "half cut solar panel in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional half cut solar panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/half-cut-solar-panel-vadodara" },
  openGraph: {
    title: "half cut solar panel in Vadodara | VadodaraExperts",
    description: "Professional half cut solar panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/half-cut-solar-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="half-cut-solar-panel-vadodara" />;
}
