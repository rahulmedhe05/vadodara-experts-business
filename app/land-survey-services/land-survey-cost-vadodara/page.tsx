import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "land survey cost in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional land survey cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/land-survey-cost-vadodara" },
  openGraph: {
    title: "land survey cost in Vadodara | VadodaraExperts",
    description: "Professional land survey cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/land-survey-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-survey-cost-vadodara" />;
}
