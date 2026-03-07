import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Cash to cash cycle in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional cash to cash cycle services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/cash-to-cash-cycle-vadodara" },
  openGraph: {
    title: "Cash to cash cycle in Vadodara | VadodaraExperts",
    description: "Professional cash to cash cycle services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/cash-to-cash-cycle-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cash-to-cash-cycle-vadodara" />;
}
