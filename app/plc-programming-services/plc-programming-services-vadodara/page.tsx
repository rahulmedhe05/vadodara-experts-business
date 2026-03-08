import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC programming services in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional plc programming services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/plc-programming-services-vadodara" },
  openGraph: {
    title: "PLC programming services in Vadodara | VadodaraExperts",
    description: "Professional plc programming services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/plc-programming-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-programming-services-vadodara" />;
}
