import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Duty assessment in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional duty assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/duty-assessment-vadodara" },
  openGraph: {
    title: "Duty assessment in Vadodara | VadodaraExperts",
    description: "Professional duty assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/duty-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="duty-assessment-vadodara" />;
}
