import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "factory for rent in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional factory for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/factory-for-rent-vadodara" },
  openGraph: {
    title: "factory for rent in Vadodara | VadodaraExperts",
    description: "Professional factory for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/factory-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-for-rent-vadodara" />;
}
