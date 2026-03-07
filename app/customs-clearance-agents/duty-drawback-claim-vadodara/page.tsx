import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Duty drawback claim in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional duty drawback claim services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/duty-drawback-claim-vadodara" },
  openGraph: {
    title: "Duty drawback claim in Vadodara | VadodaraExperts",
    description: "Professional duty drawback claim services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/duty-drawback-claim-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="duty-drawback-claim-vadodara" />;
}
