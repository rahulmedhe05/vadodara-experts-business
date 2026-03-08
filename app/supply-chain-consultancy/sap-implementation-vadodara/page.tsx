import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "SAP implementation in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional sap implementation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/sap-implementation-vadodara" },
  openGraph: {
    title: "SAP implementation in Vadodara | VadodaraExperts",
    description: "Professional sap implementation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/sap-implementation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sap-implementation-vadodara" />;
}
