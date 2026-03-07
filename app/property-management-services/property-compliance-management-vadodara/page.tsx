import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Property compliance management in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional property compliance management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/property-compliance-management-vadodara" },
  openGraph: {
    title: "Property compliance management in Vadodara | VadodaraExperts",
    description: "Professional property compliance management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/property-compliance-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-compliance-management-vadodara" />;
}
