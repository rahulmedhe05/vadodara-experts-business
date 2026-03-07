import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "POA for NRI in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional poa for nri services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/poa-for-nri-vadodara" },
  openGraph: {
    title: "POA for NRI in Vadodara | VadodaraExperts",
    description: "Professional poa for nri services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/poa-for-nri-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="poa-for-nri-vadodara" />;
}
