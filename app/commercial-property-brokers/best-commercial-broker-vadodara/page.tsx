import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "best commercial broker in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional best commercial broker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/best-commercial-broker-vadodara" },
  openGraph: {
    title: "best commercial broker in Vadodara | VadodaraExperts",
    description: "Professional best commercial broker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/best-commercial-broker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-commercial-broker-vadodara" />;
}
