import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "rental yield analysis in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional rental yield analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/rental-yield-analysis-vadodara" },
  openGraph: {
    title: "rental yield analysis in Vadodara | VadodaraExperts",
    description: "Professional rental yield analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/rental-yield-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rental-yield-analysis-vadodara" />;
}
