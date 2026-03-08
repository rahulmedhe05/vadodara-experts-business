import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "Siemens S7-400 in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional siemens s7-400 services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/siemens-s7-400-vadodara" },
  openGraph: {
    title: "Siemens S7-400 in Vadodara | VadodaraExperts",
    description: "Professional siemens s7-400 services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/siemens-s7-400-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="siemens-s7-400-vadodara" />;
}
