import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Real estate agent in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional real estate agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/real-estate-agent-vadodara" },
  openGraph: {
    title: "Real estate agent in Vadodara | VadodaraExperts",
    description: "Professional real estate agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/real-estate-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="real-estate-agent-vadodara" />;
}
