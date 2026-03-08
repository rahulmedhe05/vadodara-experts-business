import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "soil fertility test in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional soil fertility test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/soil-fertility-test-vadodara" },
  openGraph: {
    title: "soil fertility test in Vadodara | VadodaraExperts",
    description: "Professional soil fertility test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/soil-fertility-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soil-fertility-test-vadodara" />;
}
