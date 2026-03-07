import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "structured text programming in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional structured text programming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/structured-text-programming-vadodara" },
  openGraph: {
    title: "structured text programming in Vadodara | VadodaraExperts",
    description: "Professional structured text programming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/structured-text-programming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structured-text-programming-vadodara" />;
}
