import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "commercial property Alkapuri in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional commercial property alkapuri services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/commercial-property-alkapuri-vadodara" },
  openGraph: {
    title: "commercial property Alkapuri in Vadodara | VadodaraExperts",
    description: "Professional commercial property alkapuri services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/commercial-property-alkapuri-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-property-alkapuri-vadodara" />;
}
