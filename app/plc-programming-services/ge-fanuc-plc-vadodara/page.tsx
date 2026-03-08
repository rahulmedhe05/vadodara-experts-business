import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "GE Fanuc PLC in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional ge fanuc plc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/ge-fanuc-plc-vadodara" },
  openGraph: {
    title: "GE Fanuc PLC in Vadodara | VadodaraExperts",
    description: "Professional ge fanuc plc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/ge-fanuc-plc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ge-fanuc-plc-vadodara" />;
}
