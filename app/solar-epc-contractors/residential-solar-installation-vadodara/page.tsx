import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "residential solar installation in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional residential solar installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/residential-solar-installation-vadodara" },
  openGraph: {
    title: "residential solar installation in Vadodara | VadodaraExperts",
    description: "Professional residential solar installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/residential-solar-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-solar-installation-vadodara" />;
}
