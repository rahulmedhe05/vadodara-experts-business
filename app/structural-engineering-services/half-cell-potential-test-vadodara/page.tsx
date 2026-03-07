import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Half cell potential test in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional half cell potential test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/half-cell-potential-test-vadodara" },
  openGraph: {
    title: "Half cell potential test in Vadodara | VadodaraExperts",
    description: "Professional half cell potential test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/half-cell-potential-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="half-cell-potential-test-vadodara" />;
}
