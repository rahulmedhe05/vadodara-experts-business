import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "food court space in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional food court space services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/food-court-space-vadodara" },
  openGraph: {
    title: "food court space in Vadodara | VadodaraExperts",
    description: "Professional food court space services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/food-court-space-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="food-court-space-vadodara" />;
}
