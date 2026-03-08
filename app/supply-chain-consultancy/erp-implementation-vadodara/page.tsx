import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "ERP implementation in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional erp implementation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/erp-implementation-vadodara" },
  openGraph: {
    title: "ERP implementation in Vadodara | VadodaraExperts",
    description: "Professional erp implementation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/erp-implementation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="erp-implementation-vadodara" />;
}
