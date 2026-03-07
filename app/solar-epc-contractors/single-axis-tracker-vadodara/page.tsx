import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "single axis tracker in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional single axis tracker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/single-axis-tracker-vadodara" },
  openGraph: {
    title: "single axis tracker in Vadodara | VadodaraExperts",
    description: "Professional single axis tracker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/single-axis-tracker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="single-axis-tracker-vadodara" />;
}
