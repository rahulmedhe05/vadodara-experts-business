import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "ICEGATE filing in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional icegate filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/icegate-filing-vadodara" },
  openGraph: {
    title: "ICEGATE filing in Vadodara | VadodaraExperts",
    description: "Professional icegate filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/icegate-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="icegate-filing-vadodara" />;
}
