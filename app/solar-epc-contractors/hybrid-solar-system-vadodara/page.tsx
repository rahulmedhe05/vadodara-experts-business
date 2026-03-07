import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "hybrid solar system in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional hybrid solar system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/hybrid-solar-system-vadodara" },
  openGraph: {
    title: "hybrid solar system in Vadodara | VadodaraExperts",
    description: "Professional hybrid solar system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/hybrid-solar-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hybrid-solar-system-vadodara" />;
}
