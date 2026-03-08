import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Property paper work in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional property paper work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/property-paper-work-vadodara" },
  openGraph: {
    title: "Property paper work in Vadodara | VadodaraExperts",
    description: "Professional property paper work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/property-paper-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-paper-work-vadodara" />;
}
