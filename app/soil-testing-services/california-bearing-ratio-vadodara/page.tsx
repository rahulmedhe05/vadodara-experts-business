import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "California bearing ratio in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional california bearing ratio services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/california-bearing-ratio-vadodara" },
  openGraph: {
    title: "California bearing ratio in Vadodara | VadodaraExperts",
    description: "Professional california bearing ratio services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/california-bearing-ratio-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="california-bearing-ratio-vadodara" />;
}
