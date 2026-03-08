import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Property legal services in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional property legal services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/property-legal-services-vadodara" },
  openGraph: {
    title: "Property legal services in Vadodara | VadodaraExperts",
    description: "Professional property legal services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/property-legal-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-legal-services-vadodara" />;
}
