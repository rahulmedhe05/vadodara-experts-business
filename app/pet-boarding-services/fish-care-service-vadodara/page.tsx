import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "fish care service in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional fish care service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/fish-care-service-vadodara" },
  openGraph: {
    title: "fish care service in Vadodara | VadodaraExperts",
    description: "Professional fish care service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/fish-care-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fish-care-service-vadodara" />;
}
