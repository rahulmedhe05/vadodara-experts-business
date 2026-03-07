import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "restaurant space for rent in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional restaurant space for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/restaurant-space-for-rent-vadodara" },
  openGraph: {
    title: "restaurant space for rent in Vadodara | VadodaraExperts",
    description: "Professional restaurant space for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/restaurant-space-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="restaurant-space-for-rent-vadodara" />;
}
