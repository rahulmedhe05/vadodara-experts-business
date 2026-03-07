import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "Atterberg limits test in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional atterberg limits test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/atterberg-limits-test-vadodara" },
  openGraph: {
    title: "Atterberg limits test in Vadodara | VadodaraExperts",
    description: "Professional atterberg limits test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/atterberg-limits-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="atterberg-limits-test-vadodara" />;
}
