import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "best PLC programmer in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional best plc programmer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/best-plc-programmer-vadodara" },
  openGraph: {
    title: "best PLC programmer in Vadodara | VadodaraExperts",
    description: "Professional best plc programmer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/best-plc-programmer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-plc-programmer-vadodara" />;
}
