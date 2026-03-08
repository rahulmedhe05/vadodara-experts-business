import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "casting machining in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional casting machining services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/casting-machining-vadodara" },
  openGraph: {
    title: "casting machining in Vadodara | VadodaraExperts",
    description: "Professional casting machining services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/casting-machining-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="casting-machining-vadodara" />;
}
