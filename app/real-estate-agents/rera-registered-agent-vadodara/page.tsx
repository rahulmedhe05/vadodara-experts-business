import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "RERA registered agent in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional rera registered agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/rera-registered-agent-vadodara" },
  openGraph: {
    title: "RERA registered agent in Vadodara | VadodaraExperts",
    description: "Professional rera registered agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/rera-registered-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rera-registered-agent-vadodara" />;
}
