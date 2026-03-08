import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Customs compliance in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional customs compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/customs-compliance-vadodara" },
  openGraph: {
    title: "Customs compliance in Vadodara | VadodaraExperts",
    description: "Professional customs compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/customs-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="customs-compliance-vadodara" />;
}
