import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "keyway cutting in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional keyway cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/keyway-cutting-vadodara" },
  openGraph: {
    title: "keyway cutting in Vadodara | VadodaraExperts",
    description: "Professional keyway cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/keyway-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="keyway-cutting-vadodara" />;
}
