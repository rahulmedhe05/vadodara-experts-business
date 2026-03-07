import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "7/12 extract survey in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional 7/12 extract survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/712-extract-survey-vadodara" },
  openGraph: {
    title: "7/12 extract survey in Vadodara | VadodaraExperts",
    description: "Professional 7/12 extract survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/712-extract-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="712-extract-survey-vadodara" />;
}
