import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "professional pet grooming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional professional pet grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/professional-pet-grooming-vadodara" },
  openGraph: {
    title: "professional pet grooming in Vadodara | VadodaraExperts",
    description: "Professional professional pet grooming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/professional-pet-grooming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="professional-pet-grooming-vadodara" />;
}
