import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Compliance audit supply chain in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional compliance audit supply chain services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/compliance-audit-supply-chain-vadodara" },
  openGraph: {
    title: "Compliance audit supply chain in Vadodara | VadodaraExperts",
    description: "Professional compliance audit supply chain services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/compliance-audit-supply-chain-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compliance-audit-supply-chain-vadodara" />;
}
