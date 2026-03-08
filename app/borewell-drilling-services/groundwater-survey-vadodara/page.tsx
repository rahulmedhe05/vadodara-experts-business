import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Groundwater survey in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional groundwater survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/groundwater-survey-vadodara" },
  openGraph: {
    title: "Groundwater survey in Vadodara | VadodaraExperts",
    description: "Professional groundwater survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/groundwater-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="groundwater-survey-vadodara" />;
}
