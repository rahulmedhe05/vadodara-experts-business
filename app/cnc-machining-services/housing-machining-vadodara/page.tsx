import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "housing machining in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional housing machining services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/housing-machining-vadodara" },
  openGraph: {
    title: "housing machining in Vadodara | VadodaraExperts",
    description: "Professional housing machining services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/housing-machining-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="housing-machining-vadodara" />;
}
