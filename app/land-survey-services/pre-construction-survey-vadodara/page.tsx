import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "pre-construction survey in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional pre-construction survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/pre-construction-survey-vadodara" },
  openGraph: {
    title: "pre-construction survey in Vadodara | VadodaraExperts",
    description: "Professional pre-construction survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/pre-construction-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-construction-survey-vadodara" />;
}
