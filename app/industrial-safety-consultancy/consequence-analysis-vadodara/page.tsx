import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "consequence analysis in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional consequence analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/consequence-analysis-vadodara" },
  openGraph: {
    title: "consequence analysis in Vadodara | VadodaraExperts",
    description: "Professional consequence analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/consequence-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="consequence-analysis-vadodara" />;
}
