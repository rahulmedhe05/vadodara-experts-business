import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Blue Star water purifier service in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional blue star water purifier service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/blue-star-water-purifier-service-vadodara" },
  openGraph: {
    title: "Blue Star water purifier service in Vadodara | VadodaraExperts",
    description: "Professional blue star water purifier service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/blue-star-water-purifier-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="blue-star-water-purifier-service-vadodara" />;
}
