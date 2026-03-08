import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Property loan legal check in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional property loan legal check services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/property-loan-legal-check-vadodara" },
  openGraph: {
    title: "Property loan legal check in Vadodara | VadodaraExperts",
    description: "Professional property loan legal check services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/property-loan-legal-check-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-loan-legal-check-vadodara" />;
}
