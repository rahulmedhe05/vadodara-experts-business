import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "running factory for sale in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional running factory for sale services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/running-factory-for-sale-vadodara" },
  openGraph: {
    title: "running factory for sale in Vadodara | VadodaraExperts",
    description: "Professional running factory for sale services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/running-factory-for-sale-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="running-factory-for-sale-vadodara" />;
}
