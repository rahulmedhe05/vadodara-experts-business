import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Property title search in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional property title search services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/property-title-search-vadodara" },
  openGraph: {
    title: "Property title search in Vadodara | VadodaraExperts",
    description: "Professional property title search services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/property-title-search-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-title-search-vadodara" />;
}
