import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Multi stage pump repair in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional multi stage pump repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/multi-stage-pump-repair-vadodara" },
  openGraph: {
    title: "Multi stage pump repair in Vadodara | VadodaraExperts",
    description: "Professional multi stage pump repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/multi-stage-pump-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-stage-pump-repair-vadodara" />;
}
