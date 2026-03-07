import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "OPC UA server in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional opc ua server services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/opc-ua-server-vadodara" },
  openGraph: {
    title: "OPC UA server in Vadodara | VadodaraExperts",
    description: "Professional opc ua server services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/opc-ua-server-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="opc-ua-server-vadodara" />;
}
