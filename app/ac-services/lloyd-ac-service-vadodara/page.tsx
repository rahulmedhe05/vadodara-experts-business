import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "Lloyd AC service in Vadodara | AC Services | VadodaraExperts",
  description: "Professional lloyd ac service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/lloyd-ac-service-vadodara" },
  openGraph: {
    title: "Lloyd AC service in Vadodara | VadodaraExperts",
    description: "Professional lloyd ac service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/lloyd-ac-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lloyd-ac-service-vadodara" />;
}
