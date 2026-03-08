import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC alarm management in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional plc alarm management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/plc-alarm-management-vadodara" },
  openGraph: {
    title: "PLC alarm management in Vadodara | VadodaraExperts",
    description: "Professional plc alarm management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/plc-alarm-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-alarm-management-vadodara" />;
}
