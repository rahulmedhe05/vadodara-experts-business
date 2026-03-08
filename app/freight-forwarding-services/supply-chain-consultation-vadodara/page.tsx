import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Supply chain consultation in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional supply chain consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/supply-chain-consultation-vadodara" },
  openGraph: {
    title: "Supply chain consultation in Vadodara | VadodaraExperts",
    description: "Professional supply chain consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/supply-chain-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="supply-chain-consultation-vadodara" />;
}
