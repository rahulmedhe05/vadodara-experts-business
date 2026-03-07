import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "land area calculation in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional land area calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/land-area-calculation-vadodara" },
  openGraph: {
    title: "land area calculation in Vadodara | VadodaraExperts",
    description: "Professional land area calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/land-area-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-area-calculation-vadodara" />;
}
