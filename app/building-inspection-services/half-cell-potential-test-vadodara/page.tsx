import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "half cell potential test in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional half cell potential test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/half-cell-potential-test-vadodara" },
  openGraph: {
    title: "half cell potential test in Vadodara | VadodaraExperts",
    description: "Professional half cell potential test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/half-cell-potential-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="half-cell-potential-test-vadodara" />;
}
