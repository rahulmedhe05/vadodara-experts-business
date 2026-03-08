import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "heating ventilation air conditioning in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional heating ventilation air conditioning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/heating-ventilation-air-conditioning-vadodara" },
  openGraph: {
    title: "heating ventilation air conditioning in Vadodara | VadodaraExperts",
    description: "Professional heating ventilation air conditioning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/heating-ventilation-air-conditioning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heating-ventilation-air-conditioning-vadodara" />;
}
