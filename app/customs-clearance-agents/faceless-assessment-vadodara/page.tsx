import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Faceless assessment in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional faceless assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/faceless-assessment-vadodara" },
  openGraph: {
    title: "Faceless assessment in Vadodara | VadodaraExperts",
    description: "Professional faceless assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/faceless-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="faceless-assessment-vadodara" />;
}
