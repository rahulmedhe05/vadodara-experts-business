import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "bow tie analysis in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional bow tie analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/bow-tie-analysis-vadodara" },
  openGraph: {
    title: "bow tie analysis in Vadodara | VadodaraExperts",
    description: "Professional bow tie analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/bow-tie-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bow-tie-analysis-vadodara" />;
}
