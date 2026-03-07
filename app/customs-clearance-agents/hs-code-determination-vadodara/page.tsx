import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "HS code determination in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional hs code determination services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/hs-code-determination-vadodara" },
  openGraph: {
    title: "HS code determination in Vadodara | VadodaraExperts",
    description: "Professional hs code determination services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/hs-code-determination-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hs-code-determination-vadodara" />;
}
