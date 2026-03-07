import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "dog hair cutting in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional dog hair cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/dog-hair-cutting-vadodara" },
  openGraph: {
    title: "dog hair cutting in Vadodara | VadodaraExperts",
    description: "Professional dog hair cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/dog-hair-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-hair-cutting-vadodara" />;
}
