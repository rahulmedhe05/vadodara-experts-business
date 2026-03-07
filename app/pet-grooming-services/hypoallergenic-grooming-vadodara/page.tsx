import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "hypoallergenic grooming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional hypoallergenic grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/hypoallergenic-grooming-vadodara" },
  openGraph: {
    title: "hypoallergenic grooming in Vadodara | VadodaraExperts",
    description: "Professional hypoallergenic grooming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/hypoallergenic-grooming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hypoallergenic-grooming-vadodara" />;
}
