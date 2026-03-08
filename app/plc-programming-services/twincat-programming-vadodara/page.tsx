import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "TwinCAT programming in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional twincat programming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/twincat-programming-vadodara" },
  openGraph: {
    title: "TwinCAT programming in Vadodara | VadodaraExperts",
    description: "Professional twincat programming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/twincat-programming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="twincat-programming-vadodara" />;
}
