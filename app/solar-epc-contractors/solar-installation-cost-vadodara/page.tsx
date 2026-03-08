import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "solar installation cost in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional solar installation cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/solar-installation-cost-vadodara" },
  openGraph: {
    title: "solar installation cost in Vadodara | VadodaraExperts",
    description: "Professional solar installation cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/solar-installation-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-installation-cost-vadodara" />;
}
