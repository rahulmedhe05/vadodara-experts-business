import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "personal year prediction in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional personal year prediction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/personal-year-prediction-vadodara" },
  openGraph: {
    title: "personal year prediction in Vadodara | VadodaraExperts",
    description: "Professional personal year prediction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/personal-year-prediction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="personal-year-prediction-vadodara" />;
}
