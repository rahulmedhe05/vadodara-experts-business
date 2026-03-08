import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "borehole drilling for soil test in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional borehole drilling for soil test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/borehole-drilling-for-soil-test-vadodara" },
  openGraph: {
    title: "borehole drilling for soil test in Vadodara | VadodaraExperts",
    description: "Professional borehole drilling for soil test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/borehole-drilling-for-soil-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="borehole-drilling-for-soil-test-vadodara" />;
}
