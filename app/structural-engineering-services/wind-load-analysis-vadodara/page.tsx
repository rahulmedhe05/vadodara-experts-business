import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Wind load analysis in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional wind load analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/wind-load-analysis-vadodara" },
  openGraph: {
    title: "Wind load analysis in Vadodara | VadodaraExperts",
    description: "Professional wind load analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/wind-load-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wind-load-analysis-vadodara" />;
}
