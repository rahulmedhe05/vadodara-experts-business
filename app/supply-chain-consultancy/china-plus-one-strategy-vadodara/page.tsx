import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "China plus one strategy in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional china plus one strategy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/china-plus-one-strategy-vadodara" },
  openGraph: {
    title: "China plus one strategy in Vadodara | VadodaraExperts",
    description: "Professional china plus one strategy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/china-plus-one-strategy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="china-plus-one-strategy-vadodara" />;
}
