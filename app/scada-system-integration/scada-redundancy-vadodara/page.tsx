import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "SCADA redundancy in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional scada redundancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/scada-redundancy-vadodara" },
  openGraph: {
    title: "SCADA redundancy in Vadodara | VadodaraExperts",
    description: "Professional scada redundancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/scada-redundancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scada-redundancy-vadodara" />;
}
