import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "best solar EPC contractor in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional best solar epc contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/best-solar-epc-contractor-vadodara" },
  openGraph: {
    title: "best solar EPC contractor in Vadodara | VadodaraExperts",
    description: "Professional best solar epc contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/best-solar-epc-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-solar-epc-contractor-vadodara" />;
}
