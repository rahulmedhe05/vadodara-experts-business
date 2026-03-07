import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "daily pet visit in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional daily pet visit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/daily-pet-visit-vadodara" },
  openGraph: {
    title: "daily pet visit in Vadodara | VadodaraExperts",
    description: "Professional daily pet visit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/daily-pet-visit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="daily-pet-visit-vadodara" />;
}
