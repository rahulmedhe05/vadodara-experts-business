import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Just in time in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional just in time services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/just-in-time-vadodara" },
  openGraph: {
    title: "Just in time in Vadodara | VadodaraExperts",
    description: "Professional just in time services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/just-in-time-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="just-in-time-vadodara" />;
}
