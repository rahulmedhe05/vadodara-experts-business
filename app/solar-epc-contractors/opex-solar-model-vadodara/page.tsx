import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "OPEX solar model in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional opex solar model services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/opex-solar-model-vadodara" },
  openGraph: {
    title: "OPEX solar model in Vadodara | VadodaraExperts",
    description: "Professional opex solar model services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/opex-solar-model-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="opex-solar-model-vadodara" />;
}
