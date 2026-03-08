import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "office space broker in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional office space broker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/office-space-broker-vadodara" },
  openGraph: {
    title: "office space broker in Vadodara | VadodaraExperts",
    description: "Professional office space broker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/office-space-broker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-space-broker-vadodara" />;
}
