import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-pest-control")!;

export const metadata: Metadata = {
  title: "Commercial Pest Control Near Me in Vadodara | Commercial Pest Control | VadodaraExperts",
  description: "Professional commercial pest control near me services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-pest-control/commercial-pest-control-near-me-vadodara" },
  openGraph: {
    title: "Commercial Pest Control Near Me in Vadodara | VadodaraExperts",
    description: "Professional commercial pest control near me services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-pest-control/commercial-pest-control-near-me-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-pest-control-near-me-vadodara" />;
}
