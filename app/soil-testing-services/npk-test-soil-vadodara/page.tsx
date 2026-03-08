import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "NPK test soil in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional npk test soil services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/npk-test-soil-vadodara" },
  openGraph: {
    title: "NPK test soil in Vadodara | VadodaraExperts",
    description: "Professional npk test soil services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/npk-test-soil-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="npk-test-soil-vadodara" />;
}
