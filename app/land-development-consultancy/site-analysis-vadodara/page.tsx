import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "site analysis in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional site analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/site-analysis-vadodara" },
  openGraph: {
    title: "site analysis in Vadodara | VadodaraExperts",
    description: "Professional site analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/site-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="site-analysis-vadodara" />;
}
