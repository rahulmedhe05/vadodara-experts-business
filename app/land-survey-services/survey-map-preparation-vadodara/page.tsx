import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "survey map preparation in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional survey map preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/survey-map-preparation-vadodara" },
  openGraph: {
    title: "survey map preparation in Vadodara | VadodaraExperts",
    description: "Professional survey map preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/survey-map-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="survey-map-preparation-vadodara" />;
}
