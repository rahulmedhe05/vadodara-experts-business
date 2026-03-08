import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "home dog grooming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional home dog grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/home-dog-grooming-vadodara" },
  openGraph: {
    title: "home dog grooming in Vadodara | VadodaraExperts",
    description: "Professional home dog grooming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/home-dog-grooming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-dog-grooming-vadodara" />;
}
