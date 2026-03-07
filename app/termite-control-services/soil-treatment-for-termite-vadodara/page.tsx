import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Soil treatment for termite in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional soil treatment for termite services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/soil-treatment-for-termite-vadodara" },
  openGraph: {
    title: "Soil treatment for termite in Vadodara | VadodaraExperts",
    description: "Professional soil treatment for termite services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/soil-treatment-for-termite-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soil-treatment-for-termite-vadodara" />;
}
