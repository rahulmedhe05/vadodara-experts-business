import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Packaged drinking water plant in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional packaged drinking water plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/packaged-drinking-water-plant-vadodara" },
  openGraph: {
    title: "Packaged drinking water plant in Vadodara | VadodaraExperts",
    description: "Professional packaged drinking water plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/packaged-drinking-water-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="packaged-drinking-water-plant-vadodara" />;
}
