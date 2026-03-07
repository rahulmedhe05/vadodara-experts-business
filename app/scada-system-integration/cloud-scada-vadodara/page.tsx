import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "cloud SCADA in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional cloud scada services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/cloud-scada-vadodara" },
  openGraph: {
    title: "cloud SCADA in Vadodara | VadodaraExperts",
    description: "Professional cloud scada services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/cloud-scada-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cloud-scada-vadodara" />;
}
