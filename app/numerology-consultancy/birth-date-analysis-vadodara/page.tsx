import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "birth date analysis in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional birth date analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/birth-date-analysis-vadodara" },
  openGraph: {
    title: "birth date analysis in Vadodara | VadodaraExperts",
    description: "Professional birth date analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/birth-date-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="birth-date-analysis-vadodara" />;
}
