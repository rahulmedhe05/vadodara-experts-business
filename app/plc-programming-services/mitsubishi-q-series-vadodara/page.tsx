import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "Mitsubishi Q series in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional mitsubishi q series services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/mitsubishi-q-series-vadodara" },
  openGraph: {
    title: "Mitsubishi Q series in Vadodara | VadodaraExperts",
    description: "Professional mitsubishi q series services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/mitsubishi-q-series-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mitsubishi-q-series-vadodara" />;
}
