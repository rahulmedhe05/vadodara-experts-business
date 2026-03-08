import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "OPC DA server in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional opc da server services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/opc-da-server-vadodara" },
  openGraph: {
    title: "OPC DA server in Vadodara | VadodaraExperts",
    description: "Professional opc da server services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/opc-da-server-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="opc-da-server-vadodara" />;
}
