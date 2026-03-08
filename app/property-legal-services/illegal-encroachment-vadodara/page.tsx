import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Illegal encroachment in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional illegal encroachment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/illegal-encroachment-vadodara" },
  openGraph: {
    title: "Illegal encroachment in Vadodara | VadodaraExperts",
    description: "Professional illegal encroachment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/illegal-encroachment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="illegal-encroachment-vadodara" />;
}
