import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Pureit service in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional pureit service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/pureit-service-vadodara" },
  openGraph: {
    title: "Pureit service in Vadodara | VadodaraExperts",
    description: "Professional pureit service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/pureit-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pureit-service-vadodara" />;
}
