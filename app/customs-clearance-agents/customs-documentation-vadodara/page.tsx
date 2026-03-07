import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Customs documentation in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional customs documentation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/customs-documentation-vadodara" },
  openGraph: {
    title: "Customs documentation in Vadodara | VadodaraExperts",
    description: "Professional customs documentation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/customs-documentation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="customs-documentation-vadodara" />;
}
