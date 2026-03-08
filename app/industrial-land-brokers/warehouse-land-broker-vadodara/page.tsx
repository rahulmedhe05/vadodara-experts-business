import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "warehouse land broker in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional warehouse land broker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/warehouse-land-broker-vadodara" },
  openGraph: {
    title: "warehouse land broker in Vadodara | VadodaraExperts",
    description: "Professional warehouse land broker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/warehouse-land-broker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-land-broker-vadodara" />;
}
