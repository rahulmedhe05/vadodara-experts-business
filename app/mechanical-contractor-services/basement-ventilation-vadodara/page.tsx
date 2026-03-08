import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "basement ventilation in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional basement ventilation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/basement-ventilation-vadodara" },
  openGraph: {
    title: "basement ventilation in Vadodara | VadodaraExperts",
    description: "Professional basement ventilation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/basement-ventilation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="basement-ventilation-vadodara" />;
}
