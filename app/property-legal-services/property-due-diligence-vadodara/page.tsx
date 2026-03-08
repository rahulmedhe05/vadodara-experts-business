import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Property due diligence in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional property due diligence services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/property-due-diligence-vadodara" },
  openGraph: {
    title: "Property due diligence in Vadodara | VadodaraExperts",
    description: "Professional property due diligence services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/property-due-diligence-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-due-diligence-vadodara" />;
}
