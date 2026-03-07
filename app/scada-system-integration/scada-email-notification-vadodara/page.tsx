import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "SCADA email notification in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional scada email notification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/scada-email-notification-vadodara" },
  openGraph: {
    title: "SCADA email notification in Vadodara | VadodaraExperts",
    description: "Professional scada email notification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/scada-email-notification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scada-email-notification-vadodara" />;
}
