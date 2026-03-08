import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "pre-leased commercial property in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional pre-leased commercial property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/pre-leased-commercial-property-vadodara" },
  openGraph: {
    title: "pre-leased commercial property in Vadodara | VadodaraExperts",
    description: "Professional pre-leased commercial property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/pre-leased-commercial-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-leased-commercial-property-vadodara" />;
}
