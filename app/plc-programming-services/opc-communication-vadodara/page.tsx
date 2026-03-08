import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "OPC communication in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional opc communication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/opc-communication-vadodara" },
  openGraph: {
    title: "OPC communication in Vadodara | VadodaraExperts",
    description: "Professional opc communication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/opc-communication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="opc-communication-vadodara" />;
}
