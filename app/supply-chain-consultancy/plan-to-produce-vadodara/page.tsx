import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Plan to produce in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional plan to produce services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/plan-to-produce-vadodara" },
  openGraph: {
    title: "Plan to produce in Vadodara | VadodaraExperts",
    description: "Professional plan to produce services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/plan-to-produce-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plan-to-produce-vadodara" />;
}
