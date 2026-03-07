import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "SCADA mobile app in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional scada mobile app services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/scada-mobile-app-vadodara" },
  openGraph: {
    title: "SCADA mobile app in Vadodara | VadodaraExperts",
    description: "Professional scada mobile app services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/scada-mobile-app-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scada-mobile-app-vadodara" />;
}
