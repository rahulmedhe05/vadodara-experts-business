import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "frequency response analysis in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional frequency response analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/frequency-response-analysis-vadodara" },
  openGraph: {
    title: "frequency response analysis in Vadodara | VadodaraExperts",
    description: "Professional frequency response analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/frequency-response-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="frequency-response-analysis-vadodara" />;
}
