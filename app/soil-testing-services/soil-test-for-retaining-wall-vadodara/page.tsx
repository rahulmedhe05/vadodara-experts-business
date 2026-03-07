import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "soil test for retaining wall in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional soil test for retaining wall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/soil-test-for-retaining-wall-vadodara" },
  openGraph: {
    title: "soil test for retaining wall in Vadodara | VadodaraExperts",
    description: "Professional soil test for retaining wall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/soil-test-for-retaining-wall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soil-test-for-retaining-wall-vadodara" />;
}
