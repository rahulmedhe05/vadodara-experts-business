import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "SCADA HMI development in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional scada hmi development services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/scada-hmi-development-vadodara" },
  openGraph: {
    title: "SCADA HMI development in Vadodara | VadodaraExperts",
    description: "Professional scada hmi development services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/scada-hmi-development-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scada-hmi-development-vadodara" />;
}
