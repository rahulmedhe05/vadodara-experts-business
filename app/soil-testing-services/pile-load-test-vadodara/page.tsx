import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "pile load test in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional pile load test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/pile-load-test-vadodara" },
  openGraph: {
    title: "pile load test in Vadodara | VadodaraExperts",
    description: "Professional pile load test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/pile-load-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pile-load-test-vadodara" />;
}
