import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "shop for rent in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional shop for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/shop-for-rent-vadodara" },
  openGraph: {
    title: "shop for rent in Vadodara | VadodaraExperts",
    description: "Professional shop for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/shop-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shop-for-rent-vadodara" />;
}
