import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Fulfillment center in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional fulfillment center services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/fulfillment-center-vadodara" },
  openGraph: {
    title: "Fulfillment center in Vadodara | VadodaraExperts",
    description: "Professional fulfillment center services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/fulfillment-center-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fulfillment-center-vadodara" />;
}
