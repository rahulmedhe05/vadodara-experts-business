import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Customs broker in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional customs broker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/customs-broker-vadodara" },
  openGraph: {
    title: "Customs broker in Vadodara | VadodaraExperts",
    description: "Professional customs broker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/customs-broker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="customs-broker-vadodara" />;
}
