import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Property registration services in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional property registration services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/property-registration-services-vadodara" },
  openGraph: {
    title: "Property registration services in Vadodara | VadodaraExperts",
    description: "Professional property registration services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/property-registration-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-registration-services-vadodara" />;
}
