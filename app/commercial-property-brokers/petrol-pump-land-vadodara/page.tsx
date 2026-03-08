import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "petrol pump land in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional petrol pump land services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/petrol-pump-land-vadodara" },
  openGraph: {
    title: "petrol pump land in Vadodara | VadodaraExperts",
    description: "Professional petrol pump land services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/petrol-pump-land-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="petrol-pump-land-vadodara" />;
}
