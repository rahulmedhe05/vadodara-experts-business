import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Building condition assessment in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional building condition assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/building-condition-assessment-vadodara" },
  openGraph: {
    title: "Building condition assessment in Vadodara | VadodaraExperts",
    description: "Professional building condition assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/building-condition-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-condition-assessment-vadodara" />;
}
