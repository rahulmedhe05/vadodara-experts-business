import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Soil structure interaction in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional soil structure interaction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/soil-structure-interaction-vadodara" },
  openGraph: {
    title: "Soil structure interaction in Vadodara | VadodaraExperts",
    description: "Professional soil structure interaction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/soil-structure-interaction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soil-structure-interaction-vadodara" />;
}
