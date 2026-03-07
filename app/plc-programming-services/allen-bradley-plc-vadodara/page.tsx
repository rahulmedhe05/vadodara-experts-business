import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "Allen Bradley PLC in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional allen bradley plc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/allen-bradley-plc-vadodara" },
  openGraph: {
    title: "Allen Bradley PLC in Vadodara | VadodaraExperts",
    description: "Professional allen bradley plc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/allen-bradley-plc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="allen-bradley-plc-vadodara" />;
}
