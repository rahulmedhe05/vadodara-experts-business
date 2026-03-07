import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "best industrial broker in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional best industrial broker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/best-industrial-broker-vadodara" },
  openGraph: {
    title: "best industrial broker in Vadodara | VadodaraExperts",
    description: "Professional best industrial broker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/best-industrial-broker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-industrial-broker-vadodara" />;
}
