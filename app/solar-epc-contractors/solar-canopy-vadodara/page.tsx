import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "solar canopy in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional solar canopy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/solar-canopy-vadodara" },
  openGraph: {
    title: "solar canopy in Vadodara | VadodaraExperts",
    description: "Professional solar canopy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/solar-canopy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-canopy-vadodara" />;
}
