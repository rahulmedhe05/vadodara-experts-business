import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "daily number prediction in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional daily number prediction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/daily-number-prediction-vadodara" },
  openGraph: {
    title: "daily number prediction in Vadodara | VadodaraExperts",
    description: "Professional daily number prediction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/daily-number-prediction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="daily-number-prediction-vadodara" />;
}
