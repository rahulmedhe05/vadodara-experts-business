import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "AMF panel installation in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional amf panel installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/amf-panel-installation-vadodara" },
  openGraph: {
    title: "AMF panel installation in Vadodara | VadodaraExperts",
    description: "Professional amf panel installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/amf-panel-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="amf-panel-installation-vadodara" />;
}
