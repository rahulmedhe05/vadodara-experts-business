import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "Yokogawa PLC in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional yokogawa plc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/yokogawa-plc-vadodara" },
  openGraph: {
    title: "Yokogawa PLC in Vadodara | VadodaraExperts",
    description: "Professional yokogawa plc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/yokogawa-plc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="yokogawa-plc-vadodara" />;
}
