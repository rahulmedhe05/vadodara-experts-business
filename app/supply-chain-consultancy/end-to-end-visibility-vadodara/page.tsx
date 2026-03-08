import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "End to end visibility in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional end to end visibility services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/end-to-end-visibility-vadodara" },
  openGraph: {
    title: "End to end visibility in Vadodara | VadodaraExperts",
    description: "Professional end to end visibility services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/end-to-end-visibility-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="end-to-end-visibility-vadodara" />;
}
