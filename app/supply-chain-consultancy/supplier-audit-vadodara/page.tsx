import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Supplier audit in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional supplier audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/supplier-audit-vadodara" },
  openGraph: {
    title: "Supplier audit in Vadodara | VadodaraExperts",
    description: "Professional supplier audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/supplier-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="supplier-audit-vadodara" />;
}
