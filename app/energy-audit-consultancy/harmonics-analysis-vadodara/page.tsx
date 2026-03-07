import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "harmonics analysis in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional harmonics analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/harmonics-analysis-vadodara" },
  openGraph: {
    title: "harmonics analysis in Vadodara | VadodaraExperts",
    description: "Professional harmonics analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/harmonics-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="harmonics-analysis-vadodara" />;
}
