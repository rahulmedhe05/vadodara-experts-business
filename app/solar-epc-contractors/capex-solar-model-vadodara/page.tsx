import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "CAPEX solar model in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional capex solar model services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/capex-solar-model-vadodara" },
  openGraph: {
    title: "CAPEX solar model in Vadodara | VadodaraExperts",
    description: "Professional capex solar model services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/capex-solar-model-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="capex-solar-model-vadodara" />;
}
