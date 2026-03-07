import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "hospital space for sale in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional hospital space for sale services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/hospital-space-for-sale-vadodara" },
  openGraph: {
    title: "hospital space for sale in Vadodara | VadodaraExperts",
    description: "Professional hospital space for sale services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/hospital-space-for-sale-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-space-for-sale-vadodara" />;
}
