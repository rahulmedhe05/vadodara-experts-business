import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "demand supply analysis in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional demand supply analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/demand-supply-analysis-vadodara" },
  openGraph: {
    title: "demand supply analysis in Vadodara | VadodaraExperts",
    description: "Professional demand supply analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/demand-supply-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="demand-supply-analysis-vadodara" />;
}
