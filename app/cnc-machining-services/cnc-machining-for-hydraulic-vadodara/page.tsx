import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "CNC machining for hydraulic in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional cnc machining for hydraulic services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/cnc-machining-for-hydraulic-vadodara" },
  openGraph: {
    title: "CNC machining for hydraulic in Vadodara | VadodaraExperts",
    description: "Professional cnc machining for hydraulic services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/cnc-machining-for-hydraulic-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cnc-machining-for-hydraulic-vadodara" />;
}
