import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "cut and fill calculation in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional cut and fill calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/cut-and-fill-calculation-vadodara" },
  openGraph: {
    title: "cut and fill calculation in Vadodara | VadodaraExperts",
    description: "Professional cut and fill calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/cut-and-fill-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cut-and-fill-calculation-vadodara" />;
}
