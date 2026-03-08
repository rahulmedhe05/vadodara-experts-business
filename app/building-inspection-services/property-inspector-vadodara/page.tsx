import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "property inspector in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional property inspector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/property-inspector-vadodara" },
  openGraph: {
    title: "property inspector in Vadodara | VadodaraExperts",
    description: "Professional property inspector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/property-inspector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-inspector-vadodara" />;
}
