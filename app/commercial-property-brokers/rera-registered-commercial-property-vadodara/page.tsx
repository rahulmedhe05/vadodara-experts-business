import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "RERA registered commercial property in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional rera registered commercial property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/rera-registered-commercial-property-vadodara" },
  openGraph: {
    title: "RERA registered commercial property in Vadodara | VadodaraExperts",
    description: "Professional rera registered commercial property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/rera-registered-commercial-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rera-registered-commercial-property-vadodara" />;
}
