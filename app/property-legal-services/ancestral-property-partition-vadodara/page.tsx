import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Ancestral property partition in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional ancestral property partition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/ancestral-property-partition-vadodara" },
  openGraph: {
    title: "Ancestral property partition in Vadodara | VadodaraExperts",
    description: "Professional ancestral property partition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/ancestral-property-partition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ancestral-property-partition-vadodara" />;
}
