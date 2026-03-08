import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "route survey in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional route survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/route-survey-vadodara" },
  openGraph: {
    title: "route survey in Vadodara | VadodaraExperts",
    description: "Professional route survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/route-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="route-survey-vadodara" />;
}
