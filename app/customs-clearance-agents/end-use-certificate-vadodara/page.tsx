import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "End use certificate in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional end use certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/end-use-certificate-vadodara" },
  openGraph: {
    title: "End use certificate in Vadodara | VadodaraExperts",
    description: "Professional end use certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/end-use-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="end-use-certificate-vadodara" />;
}
