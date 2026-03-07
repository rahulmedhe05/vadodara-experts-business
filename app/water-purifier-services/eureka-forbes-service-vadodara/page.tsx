import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Eureka Forbes service in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional eureka forbes service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/eureka-forbes-service-vadodara" },
  openGraph: {
    title: "Eureka Forbes service in Vadodara | VadodaraExperts",
    description: "Professional eureka forbes service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/eureka-forbes-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="eureka-forbes-service-vadodara" />;
}
