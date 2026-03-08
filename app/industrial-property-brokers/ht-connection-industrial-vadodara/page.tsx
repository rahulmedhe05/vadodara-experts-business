import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "HT connection industrial in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional ht connection industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/ht-connection-industrial-vadodara" },
  openGraph: {
    title: "HT connection industrial in Vadodara | VadodaraExperts",
    description: "Professional ht connection industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/ht-connection-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ht-connection-industrial-vadodara" />;
}
