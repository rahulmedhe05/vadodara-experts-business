import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Property document consultant in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional property document consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/property-document-consultant-vadodara" },
  openGraph: {
    title: "Property document consultant in Vadodara | VadodaraExperts",
    description: "Professional property document consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/property-document-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-document-consultant-vadodara" />;
}
