import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC panel wiring in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional plc panel wiring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/plc-panel-wiring-vadodara" },
  openGraph: {
    title: "PLC panel wiring in Vadodara | VadodaraExperts",
    description: "Professional plc panel wiring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/plc-panel-wiring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-panel-wiring-vadodara" />;
}
