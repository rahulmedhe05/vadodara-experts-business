import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Best customs agent in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional best customs agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/best-customs-agent-vadodara" },
  openGraph: {
    title: "Best customs agent in Vadodara | VadodaraExperts",
    description: "Professional best customs agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/best-customs-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-customs-agent-vadodara" />;
}
