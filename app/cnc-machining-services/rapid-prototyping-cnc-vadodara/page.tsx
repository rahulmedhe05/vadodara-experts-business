import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "rapid prototyping CNC in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional rapid prototyping cnc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/rapid-prototyping-cnc-vadodara" },
  openGraph: {
    title: "rapid prototyping CNC in Vadodara | VadodaraExperts",
    description: "Professional rapid prototyping cnc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/rapid-prototyping-cnc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rapid-prototyping-cnc-vadodara" />;
}
