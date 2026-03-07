import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "dog paw cleaning in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional dog paw cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/dog-paw-cleaning-vadodara" },
  openGraph: {
    title: "dog paw cleaning in Vadodara | VadodaraExperts",
    description: "Professional dog paw cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/dog-paw-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-paw-cleaning-vadodara" />;
}
