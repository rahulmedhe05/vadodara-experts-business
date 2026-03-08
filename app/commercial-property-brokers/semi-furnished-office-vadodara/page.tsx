import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "semi-furnished office in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional semi-furnished office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/semi-furnished-office-vadodara" },
  openGraph: {
    title: "semi-furnished office in Vadodara | VadodaraExperts",
    description: "Professional semi-furnished office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/semi-furnished-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="semi-furnished-office-vadodara" />;
}
