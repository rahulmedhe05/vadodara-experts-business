import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Pharmaceutical supply chain in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional pharmaceutical supply chain services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/pharmaceutical-supply-chain-vadodara" },
  openGraph: {
    title: "Pharmaceutical supply chain in Vadodara | VadodaraExperts",
    description: "Professional pharmaceutical supply chain services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/pharmaceutical-supply-chain-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pharmaceutical-supply-chain-vadodara" />;
}
