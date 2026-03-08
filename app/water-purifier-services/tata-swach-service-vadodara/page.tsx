import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Tata Swach service in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional tata swach service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/tata-swach-service-vadodara" },
  openGraph: {
    title: "Tata Swach service in Vadodara | VadodaraExperts",
    description: "Professional tata swach service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/tata-swach-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tata-swach-service-vadodara" />;
}
