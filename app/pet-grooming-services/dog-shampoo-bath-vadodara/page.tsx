import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "dog shampoo bath in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional dog shampoo bath services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/dog-shampoo-bath-vadodara" },
  openGraph: {
    title: "dog shampoo bath in Vadodara | VadodaraExperts",
    description: "Professional dog shampoo bath services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/dog-shampoo-bath-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-shampoo-bath-vadodara" />;
}
