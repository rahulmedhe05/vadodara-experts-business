import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Demand forecasting in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional demand forecasting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/demand-forecasting-vadodara" },
  openGraph: {
    title: "Demand forecasting in Vadodara | VadodaraExperts",
    description: "Professional demand forecasting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/demand-forecasting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="demand-forecasting-vadodara" />;
}
