import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "solar plant commissioning in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional solar plant commissioning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/solar-plant-commissioning-vadodara" },
  openGraph: {
    title: "solar plant commissioning in Vadodara | VadodaraExperts",
    description: "Professional solar plant commissioning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/solar-plant-commissioning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-plant-commissioning-vadodara" />;
}
