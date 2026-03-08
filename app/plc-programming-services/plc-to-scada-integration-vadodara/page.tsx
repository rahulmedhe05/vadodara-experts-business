import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC to SCADA integration in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional plc to scada integration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/plc-to-scada-integration-vadodara" },
  openGraph: {
    title: "PLC to SCADA integration in Vadodara | VadodaraExperts",
    description: "Professional plc to scada integration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/plc-to-scada-integration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-to-scada-integration-vadodara" />;
}
