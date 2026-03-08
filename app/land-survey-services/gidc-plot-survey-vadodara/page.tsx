import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "GIDC plot survey in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional gidc plot survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/gidc-plot-survey-vadodara" },
  openGraph: {
    title: "GIDC plot survey in Vadodara | VadodaraExperts",
    description: "Professional gidc plot survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/gidc-plot-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gidc-plot-survey-vadodara" />;
}
