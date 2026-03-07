import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "farm land survey in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional farm land survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/farm-land-survey-vadodara" },
  openGraph: {
    title: "farm land survey in Vadodara | VadodaraExperts",
    description: "Professional farm land survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/farm-land-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="farm-land-survey-vadodara" />;
}
