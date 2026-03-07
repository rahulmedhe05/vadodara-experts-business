import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "boundary demarcation in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional boundary demarcation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/boundary-demarcation-vadodara" },
  openGraph: {
    title: "boundary demarcation in Vadodara | VadodaraExperts",
    description: "Professional boundary demarcation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/boundary-demarcation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boundary-demarcation-vadodara" />;
}
