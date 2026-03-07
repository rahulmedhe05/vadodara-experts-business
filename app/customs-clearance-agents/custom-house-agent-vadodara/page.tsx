import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Custom house agent in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional custom house agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/custom-house-agent-vadodara" },
  openGraph: {
    title: "Custom house agent in Vadodara | VadodaraExperts",
    description: "Professional custom house agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/custom-house-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="custom-house-agent-vadodara" />;
}
