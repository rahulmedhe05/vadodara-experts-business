import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "MNRE solar scheme in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional mnre solar scheme services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/mnre-solar-scheme-vadodara" },
  openGraph: {
    title: "MNRE solar scheme in Vadodara | VadodaraExperts",
    description: "Professional mnre solar scheme services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/mnre-solar-scheme-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mnre-solar-scheme-vadodara" />;
}
