import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "flange machining in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional flange machining services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/flange-machining-vadodara" },
  openGraph: {
    title: "flange machining in Vadodara | VadodaraExperts",
    description: "Professional flange machining services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/flange-machining-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flange-machining-vadodara" />;
}
