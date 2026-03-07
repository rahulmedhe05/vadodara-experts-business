import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "quantitative risk assessment in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional quantitative risk assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/quantitative-risk-assessment-vadodara" },
  openGraph: {
    title: "quantitative risk assessment in Vadodara | VadodaraExperts",
    description: "Professional quantitative risk assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/quantitative-risk-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="quantitative-risk-assessment-vadodara" />;
}
