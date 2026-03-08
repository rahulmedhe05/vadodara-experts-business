import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "open source SCADA in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional open source scada services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/open-source-scada-vadodara" },
  openGraph: {
    title: "open source SCADA in Vadodara | VadodaraExperts",
    description: "Professional open source scada services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/open-source-scada-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="open-source-scada-vadodara" />;
}
