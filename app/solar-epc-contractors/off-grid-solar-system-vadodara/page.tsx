import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "off grid solar system in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional off grid solar system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/off-grid-solar-system-vadodara" },
  openGraph: {
    title: "off grid solar system in Vadodara | VadodaraExperts",
    description: "Professional off grid solar system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/off-grid-solar-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="off-grid-solar-system-vadodara" />;
}
