import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "natural pet grooming products in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional natural pet grooming products services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/natural-pet-grooming-products-vadodara" },
  openGraph: {
    title: "natural pet grooming products in Vadodara | VadodaraExperts",
    description: "Professional natural pet grooming products services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/natural-pet-grooming-products-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="natural-pet-grooming-products-vadodara" />;
}
