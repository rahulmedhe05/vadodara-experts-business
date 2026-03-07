import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "soil testing consultant in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional soil testing consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/soil-testing-consultant-vadodara" },
  openGraph: {
    title: "soil testing consultant in Vadodara | VadodaraExperts",
    description: "Professional soil testing consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/soil-testing-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soil-testing-consultant-vadodara" />;
}
