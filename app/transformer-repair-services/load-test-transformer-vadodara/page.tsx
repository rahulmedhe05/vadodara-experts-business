import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "load test transformer in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional load test transformer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/load-test-transformer-vadodara" },
  openGraph: {
    title: "load test transformer in Vadodara | VadodaraExperts",
    description: "Professional load test transformer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/load-test-transformer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="load-test-transformer-vadodara" />;
}
