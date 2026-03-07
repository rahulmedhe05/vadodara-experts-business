import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Licensed customs broker in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional licensed customs broker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/licensed-customs-broker-vadodara" },
  openGraph: {
    title: "Licensed customs broker in Vadodara | VadodaraExperts",
    description: "Professional licensed customs broker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/licensed-customs-broker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="licensed-customs-broker-vadodara" />;
}
