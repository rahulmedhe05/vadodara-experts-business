import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "factory solar plant in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional factory solar plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/factory-solar-plant-vadodara" },
  openGraph: {
    title: "factory solar plant in Vadodara | VadodaraExperts",
    description: "Professional factory solar plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/factory-solar-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-solar-plant-vadodara" />;
}
