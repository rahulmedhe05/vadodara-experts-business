import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "DGVCL solar connection in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional dgvcl solar connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/dgvcl-solar-connection-vadodara" },
  openGraph: {
    title: "DGVCL solar connection in Vadodara | VadodaraExperts",
    description: "Professional dgvcl solar connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/dgvcl-solar-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dgvcl-solar-connection-vadodara" />;
}
