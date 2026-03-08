import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "soil investigation survey in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional soil investigation survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/soil-investigation-survey-vadodara" },
  openGraph: {
    title: "soil investigation survey in Vadodara | VadodaraExperts",
    description: "Professional soil investigation survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/soil-investigation-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soil-investigation-survey-vadodara" />;
}
