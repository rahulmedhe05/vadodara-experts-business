import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Near shoring in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional near shoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/near-shoring-vadodara" },
  openGraph: {
    title: "Near shoring in Vadodara | VadodaraExperts",
    description: "Professional near shoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/near-shoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="near-shoring-vadodara" />;
}
