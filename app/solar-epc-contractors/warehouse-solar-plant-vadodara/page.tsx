import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "warehouse solar plant in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional warehouse solar plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/warehouse-solar-plant-vadodara" },
  openGraph: {
    title: "warehouse solar plant in Vadodara | VadodaraExperts",
    description: "Professional warehouse solar plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/warehouse-solar-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-solar-plant-vadodara" />;
}
