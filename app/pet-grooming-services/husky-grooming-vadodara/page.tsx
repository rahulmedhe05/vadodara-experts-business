import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "husky grooming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional husky grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/husky-grooming-vadodara" },
  openGraph: {
    title: "husky grooming in Vadodara | VadodaraExperts",
    description: "Professional husky grooming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/husky-grooming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="husky-grooming-vadodara" />;
}
