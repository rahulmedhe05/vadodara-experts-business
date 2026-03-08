import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "dual axis tracker in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional dual axis tracker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/dual-axis-tracker-vadodara" },
  openGraph: {
    title: "dual axis tracker in Vadodara | VadodaraExperts",
    description: "Professional dual axis tracker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/dual-axis-tracker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dual-axis-tracker-vadodara" />;
}
