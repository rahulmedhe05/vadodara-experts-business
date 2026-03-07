import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Customs valuation in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional customs valuation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/customs-valuation-vadodara" },
  openGraph: {
    title: "Customs valuation in Vadodara | VadodaraExperts",
    description: "Professional customs valuation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/customs-valuation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="customs-valuation-vadodara" />;
}
