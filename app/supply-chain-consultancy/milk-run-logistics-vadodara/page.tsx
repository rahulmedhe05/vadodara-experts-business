import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Milk run logistics in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional milk run logistics services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/milk-run-logistics-vadodara" },
  openGraph: {
    title: "Milk run logistics in Vadodara | VadodaraExperts",
    description: "Professional milk run logistics services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/milk-run-logistics-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="milk-run-logistics-vadodara" />;
}
