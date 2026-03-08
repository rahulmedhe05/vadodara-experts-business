import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "pet boarding price in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional pet boarding price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/pet-boarding-price-vadodara" },
  openGraph: {
    title: "pet boarding price in Vadodara | VadodaraExperts",
    description: "Professional pet boarding price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/pet-boarding-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-boarding-price-vadodara" />;
}
