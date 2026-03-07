import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "disturbed soil sample in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional disturbed soil sample services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/disturbed-soil-sample-vadodara" },
  openGraph: {
    title: "disturbed soil sample in Vadodara | VadodaraExperts",
    description: "Professional disturbed soil sample services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/disturbed-soil-sample-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="disturbed-soil-sample-vadodara" />;
}
