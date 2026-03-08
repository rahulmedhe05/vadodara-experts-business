import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "annual numerology forecast in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional annual numerology forecast services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/annual-numerology-forecast-vadodara" },
  openGraph: {
    title: "annual numerology forecast in Vadodara | VadodaraExperts",
    description: "Professional annual numerology forecast services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/annual-numerology-forecast-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="annual-numerology-forecast-vadodara" />;
}
