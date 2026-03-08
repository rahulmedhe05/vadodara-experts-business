import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "mechanical ventilation in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional mechanical ventilation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/mechanical-ventilation-vadodara" },
  openGraph: {
    title: "mechanical ventilation in Vadodara | VadodaraExperts",
    description: "Professional mechanical ventilation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/mechanical-ventilation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-ventilation-vadodara" />;
}
