import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "dog bath service in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional dog bath service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/dog-bath-service-vadodara" },
  openGraph: {
    title: "dog bath service in Vadodara | VadodaraExperts",
    description: "Professional dog bath service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/dog-bath-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-bath-service-vadodara" />;
}
