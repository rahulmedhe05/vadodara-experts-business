import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Property condition assessment in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional property condition assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/property-condition-assessment-vadodara" },
  openGraph: {
    title: "Property condition assessment in Vadodara | VadodaraExperts",
    description: "Professional property condition assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/property-condition-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-condition-assessment-vadodara" />;
}
