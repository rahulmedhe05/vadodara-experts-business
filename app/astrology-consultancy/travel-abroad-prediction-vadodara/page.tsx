import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "travel abroad prediction in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional travel abroad prediction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/travel-abroad-prediction-vadodara" },
  openGraph: {
    title: "travel abroad prediction in Vadodara | VadodaraExperts",
    description: "Professional travel abroad prediction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/travel-abroad-prediction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="travel-abroad-prediction-vadodara" />;
}
