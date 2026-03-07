import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "power purchase agreement solar in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional power purchase agreement solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/power-purchase-agreement-solar-vadodara" },
  openGraph: {
    title: "power purchase agreement solar in Vadodara | VadodaraExperts",
    description: "Professional power purchase agreement solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/power-purchase-agreement-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-purchase-agreement-solar-vadodara" />;
}
