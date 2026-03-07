import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Property lawyer in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional property lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/property-lawyer-vadodara" },
  openGraph: {
    title: "Property lawyer in Vadodara | VadodaraExperts",
    description: "Professional property lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/property-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-lawyer-vadodara" />;
}
