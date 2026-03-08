import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "solar payback period in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional solar payback period services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/solar-payback-period-vadodara" },
  openGraph: {
    title: "solar payback period in Vadodara | VadodaraExperts",
    description: "Professional solar payback period services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/solar-payback-period-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-payback-period-vadodara" />;
}
