import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "Omron CP series in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional omron cp series services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/omron-cp-series-vadodara" },
  openGraph: {
    title: "Omron CP series in Vadodara | VadodaraExperts",
    description: "Professional omron cp series services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/omron-cp-series-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="omron-cp-series-vadodara" />;
}
