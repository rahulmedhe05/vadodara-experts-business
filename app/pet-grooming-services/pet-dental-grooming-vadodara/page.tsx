import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "pet dental grooming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional pet dental grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/pet-dental-grooming-vadodara" },
  openGraph: {
    title: "pet dental grooming in Vadodara | VadodaraExperts",
    description: "Professional pet dental grooming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/pet-dental-grooming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-dental-grooming-vadodara" />;
}
