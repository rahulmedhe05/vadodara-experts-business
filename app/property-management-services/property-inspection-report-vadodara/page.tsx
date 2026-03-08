import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Property inspection report in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional property inspection report services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/property-inspection-report-vadodara" },
  openGraph: {
    title: "Property inspection report in Vadodara | VadodaraExperts",
    description: "Professional property inspection report services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/property-inspection-report-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-inspection-report-vadodara" />;
}
