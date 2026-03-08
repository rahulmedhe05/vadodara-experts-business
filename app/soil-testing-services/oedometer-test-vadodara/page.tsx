import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "oedometer test in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional oedometer test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/oedometer-test-vadodara" },
  openGraph: {
    title: "oedometer test in Vadodara | VadodaraExperts",
    description: "Professional oedometer test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/oedometer-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="oedometer-test-vadodara" />;
}
