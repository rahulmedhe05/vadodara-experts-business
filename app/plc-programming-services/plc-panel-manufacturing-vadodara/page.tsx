import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC panel manufacturing in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional plc panel manufacturing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/plc-panel-manufacturing-vadodara" },
  openGraph: {
    title: "PLC panel manufacturing in Vadodara | VadodaraExperts",
    description: "Professional plc panel manufacturing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/plc-panel-manufacturing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-panel-manufacturing-vadodara" />;
}
