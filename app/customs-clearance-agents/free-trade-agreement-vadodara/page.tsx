import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Free trade agreement in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional free trade agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/free-trade-agreement-vadodara" },
  openGraph: {
    title: "Free trade agreement in Vadodara | VadodaraExperts",
    description: "Professional free trade agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/free-trade-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="free-trade-agreement-vadodara" />;
}
