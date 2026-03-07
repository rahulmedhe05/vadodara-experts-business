import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Aquafresh RO service in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional aquafresh ro service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/aquafresh-ro-service-vadodara" },
  openGraph: {
    title: "Aquafresh RO service in Vadodara | VadodaraExperts",
    description: "Professional aquafresh ro service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/aquafresh-ro-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aquafresh-ro-service-vadodara" />;
}
