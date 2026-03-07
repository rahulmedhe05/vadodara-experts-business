import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "solar with battery storage in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional solar with battery storage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/solar-with-battery-storage-vadodara" },
  openGraph: {
    title: "solar with battery storage in Vadodara | VadodaraExperts",
    description: "Professional solar with battery storage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/solar-with-battery-storage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-with-battery-storage-vadodara" />;
}
