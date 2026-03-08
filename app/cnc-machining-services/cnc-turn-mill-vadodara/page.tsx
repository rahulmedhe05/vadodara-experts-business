import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "CNC turn mill in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional cnc turn mill services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/cnc-turn-mill-vadodara" },
  openGraph: {
    title: "CNC turn mill in Vadodara | VadodaraExperts",
    description: "Professional cnc turn mill services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/cnc-turn-mill-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cnc-turn-mill-vadodara" />;
}
