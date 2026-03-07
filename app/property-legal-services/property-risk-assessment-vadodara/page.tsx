import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Property risk assessment in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional property risk assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/property-risk-assessment-vadodara" },
  openGraph: {
    title: "Property risk assessment in Vadodara | VadodaraExperts",
    description: "Professional property risk assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/property-risk-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-risk-assessment-vadodara" />;
}
