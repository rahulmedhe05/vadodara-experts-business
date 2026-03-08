import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "insulation heat loss survey in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional insulation heat loss survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/insulation-heat-loss-survey-vadodara" },
  openGraph: {
    title: "insulation heat loss survey in Vadodara | VadodaraExperts",
    description: "Professional insulation heat loss survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/insulation-heat-loss-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insulation-heat-loss-survey-vadodara" />;
}
