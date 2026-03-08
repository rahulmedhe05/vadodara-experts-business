import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "cafe space for rent in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional cafe space for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/cafe-space-for-rent-vadodara" },
  openGraph: {
    title: "cafe space for rent in Vadodara | VadodaraExperts",
    description: "Professional cafe space for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/cafe-space-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cafe-space-for-rent-vadodara" />;
}
