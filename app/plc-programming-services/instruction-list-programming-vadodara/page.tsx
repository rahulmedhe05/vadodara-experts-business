import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "instruction list programming in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional instruction list programming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/instruction-list-programming-vadodara" },
  openGraph: {
    title: "instruction list programming in Vadodara | VadodaraExperts",
    description: "Professional instruction list programming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/instruction-list-programming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="instruction-list-programming-vadodara" />;
}
