import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Foundation settlement analysis in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional foundation settlement analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/foundation-settlement-analysis-vadodara" },
  openGraph: {
    title: "Foundation settlement analysis in Vadodara | VadodaraExperts",
    description: "Professional foundation settlement analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/foundation-settlement-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foundation-settlement-analysis-vadodara" />;
}
