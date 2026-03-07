import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC troubleshooting in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional plc troubleshooting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/plc-troubleshooting-vadodara" },
  openGraph: {
    title: "PLC troubleshooting in Vadodara | VadodaraExperts",
    description: "Professional plc troubleshooting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/plc-troubleshooting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-troubleshooting-vadodara" />;
}
