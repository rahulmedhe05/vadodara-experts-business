import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "pet grooming near me in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional pet grooming near me services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/pet-grooming-near-me-vadodara" },
  openGraph: {
    title: "pet grooming near me in Vadodara | VadodaraExperts",
    description: "Professional pet grooming near me services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/pet-grooming-near-me-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-grooming-near-me-vadodara" />;
}
