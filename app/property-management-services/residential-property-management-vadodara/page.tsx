import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Residential property management in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional residential property management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/residential-property-management-vadodara" },
  openGraph: {
    title: "Residential property management in Vadodara | VadodaraExperts",
    description: "Professional residential property management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/residential-property-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-property-management-vadodara" />;
}
