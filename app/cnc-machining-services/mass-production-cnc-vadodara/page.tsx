import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "mass production CNC in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional mass production cnc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/mass-production-cnc-vadodara" },
  openGraph: {
    title: "mass production CNC in Vadodara | VadodaraExperts",
    description: "Professional mass production cnc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/mass-production-cnc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mass-production-cnc-vadodara" />;
}
