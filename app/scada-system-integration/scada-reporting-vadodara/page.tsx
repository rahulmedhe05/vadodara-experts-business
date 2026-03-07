import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "SCADA reporting in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional scada reporting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/scada-reporting-vadodara" },
  openGraph: {
    title: "SCADA reporting in Vadodara | VadodaraExperts",
    description: "Professional scada reporting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/scada-reporting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scada-reporting-vadodara" />;
}
