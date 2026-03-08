import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Related party import in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional related party import services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/related-party-import-vadodara" },
  openGraph: {
    title: "Related party import in Vadodara | VadodaraExperts",
    description: "Professional related party import services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/related-party-import-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="related-party-import-vadodara" />;
}
