import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "micro inverter in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional micro inverter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/micro-inverter-vadodara" },
  openGraph: {
    title: "micro inverter in Vadodara | VadodaraExperts",
    description: "Professional micro inverter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/micro-inverter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="micro-inverter-vadodara" />;
}
