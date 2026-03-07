import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Demand planning in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional demand planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/demand-planning-vadodara" },
  openGraph: {
    title: "Demand planning in Vadodara | VadodaraExperts",
    description: "Professional demand planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/demand-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="demand-planning-vadodara" />;
}
