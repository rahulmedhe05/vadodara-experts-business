import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC for HVAC in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional plc for hvac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/plc-for-hvac-vadodara" },
  openGraph: {
    title: "PLC for HVAC in Vadodara | VadodaraExperts",
    description: "Professional plc for hvac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/plc-for-hvac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-for-hvac-vadodara" />;
}
