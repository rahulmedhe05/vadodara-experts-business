import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Best supply chain consultant in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional best supply chain consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/best-supply-chain-consultant-vadodara" },
  openGraph: {
    title: "Best supply chain consultant in Vadodara | VadodaraExperts",
    description: "Professional best supply chain consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/best-supply-chain-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-supply-chain-consultant-vadodara" />;
}
