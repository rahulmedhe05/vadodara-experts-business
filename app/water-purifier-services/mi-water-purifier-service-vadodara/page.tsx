import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Mi water purifier service in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional mi water purifier service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/mi-water-purifier-service-vadodara" },
  openGraph: {
    title: "Mi water purifier service in Vadodara | VadodaraExperts",
    description: "Professional mi water purifier service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/mi-water-purifier-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mi-water-purifier-service-vadodara" />;
}
