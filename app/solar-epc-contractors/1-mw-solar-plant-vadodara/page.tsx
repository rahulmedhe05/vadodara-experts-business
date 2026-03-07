import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "1 MW solar plant in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional 1 mw solar plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/1-mw-solar-plant-vadodara" },
  openGraph: {
    title: "1 MW solar plant in Vadodara | VadodaraExperts",
    description: "Professional 1 mw solar plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/1-mw-solar-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="1-mw-solar-plant-vadodara" />;
}
