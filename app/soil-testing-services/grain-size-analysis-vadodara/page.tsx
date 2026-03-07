import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "grain size analysis in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional grain size analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/grain-size-analysis-vadodara" },
  openGraph: {
    title: "grain size analysis in Vadodara | VadodaraExperts",
    description: "Professional grain size analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/grain-size-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="grain-size-analysis-vadodara" />;
}
