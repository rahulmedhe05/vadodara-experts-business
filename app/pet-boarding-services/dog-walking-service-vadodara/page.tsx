import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "dog walking service in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional dog walking service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/dog-walking-service-vadodara" },
  openGraph: {
    title: "dog walking service in Vadodara | VadodaraExperts",
    description: "Professional dog walking service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/dog-walking-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-walking-service-vadodara" />;
}
