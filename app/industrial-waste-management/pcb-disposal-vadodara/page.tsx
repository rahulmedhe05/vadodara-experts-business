import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "PCB disposal in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional pcb disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/pcb-disposal-vadodara" },
  openGraph: {
    title: "PCB disposal in Vadodara | VadodaraExperts",
    description: "Professional pcb disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/pcb-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pcb-disposal-vadodara" />;
}
