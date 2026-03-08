import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "precision CNC machining in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional precision cnc machining services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/precision-cnc-machining-vadodara" },
  openGraph: {
    title: "precision CNC machining in Vadodara | VadodaraExperts",
    description: "Professional precision cnc machining services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/precision-cnc-machining-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="precision-cnc-machining-vadodara" />;
}
