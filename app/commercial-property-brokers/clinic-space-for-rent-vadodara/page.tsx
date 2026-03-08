import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "clinic space for rent in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional clinic space for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/clinic-space-for-rent-vadodara" },
  openGraph: {
    title: "clinic space for rent in Vadodara | VadodaraExperts",
    description: "Professional clinic space for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/clinic-space-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clinic-space-for-rent-vadodara" />;
}
