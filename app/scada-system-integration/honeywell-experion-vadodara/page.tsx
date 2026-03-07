import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "Honeywell Experion in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional honeywell experion services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/honeywell-experion-vadodara" },
  openGraph: {
    title: "Honeywell Experion in Vadodara | VadodaraExperts",
    description: "Professional honeywell experion services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/honeywell-experion-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="honeywell-experion-vadodara" />;
}
