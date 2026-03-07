import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Special valuation branch in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional special valuation branch services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/special-valuation-branch-vadodara" },
  openGraph: {
    title: "Special valuation branch in Vadodara | VadodaraExperts",
    description: "Professional special valuation branch services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/special-valuation-branch-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="special-valuation-branch-vadodara" />;
}
