import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "brass CNC machining in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional brass cnc machining services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/brass-cnc-machining-vadodara" },
  openGraph: {
    title: "brass CNC machining in Vadodara | VadodaraExperts",
    description: "Professional brass cnc machining services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/brass-cnc-machining-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="brass-cnc-machining-vadodara" />;
}
