import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Property management company in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional property management company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/property-management-company-vadodara" },
  openGraph: {
    title: "Property management company in Vadodara | VadodaraExperts",
    description: "Professional property management company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/property-management-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-management-company-vadodara" />;
}
