import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Property management services in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional property management services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/property-management-services-vadodara" },
  openGraph: {
    title: "Property management services in Vadodara | VadodaraExperts",
    description: "Professional property management services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/property-management-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-management-services-vadodara" />;
}
