import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "CNC milling machine in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional cnc milling machine services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/cnc-milling-machine-vadodara" },
  openGraph: {
    title: "CNC milling machine in Vadodara | VadodaraExperts",
    description: "Professional cnc milling machine services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/cnc-milling-machine-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cnc-milling-machine-vadodara" />;
}
