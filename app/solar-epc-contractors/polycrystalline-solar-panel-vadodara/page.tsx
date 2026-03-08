import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "polycrystalline solar panel in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional polycrystalline solar panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/polycrystalline-solar-panel-vadodara" },
  openGraph: {
    title: "polycrystalline solar panel in Vadodara | VadodaraExperts",
    description: "Professional polycrystalline solar panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/polycrystalline-solar-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="polycrystalline-solar-panel-vadodara" />;
}
