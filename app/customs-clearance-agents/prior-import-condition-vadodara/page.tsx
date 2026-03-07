import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Prior import condition in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional prior import condition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/prior-import-condition-vadodara" },
  openGraph: {
    title: "Prior import condition in Vadodara | VadodaraExperts",
    description: "Professional prior import condition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/prior-import-condition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="prior-import-condition-vadodara" />;
}
