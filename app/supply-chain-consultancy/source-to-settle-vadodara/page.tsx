import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Source to settle in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional source to settle services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/source-to-settle-vadodara" },
  openGraph: {
    title: "Source to settle in Vadodara | VadodaraExperts",
    description: "Professional source to settle services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/source-to-settle-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="source-to-settle-vadodara" />;
}
