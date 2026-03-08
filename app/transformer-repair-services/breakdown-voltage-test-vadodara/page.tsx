import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "breakdown voltage test in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional breakdown voltage test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/breakdown-voltage-test-vadodara" },
  openGraph: {
    title: "breakdown voltage test in Vadodara | VadodaraExperts",
    description: "Professional breakdown voltage test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/breakdown-voltage-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="breakdown-voltage-test-vadodara" />;
}
