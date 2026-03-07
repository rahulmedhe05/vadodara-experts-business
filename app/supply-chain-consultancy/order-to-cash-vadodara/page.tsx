import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Order to cash in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional order to cash services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/order-to-cash-vadodara" },
  openGraph: {
    title: "Order to cash in Vadodara | VadodaraExperts",
    description: "Professional order to cash services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/order-to-cash-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="order-to-cash-vadodara" />;
}
