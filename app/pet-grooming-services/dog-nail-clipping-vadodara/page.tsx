import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "dog nail clipping in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional dog nail clipping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/dog-nail-clipping-vadodara" },
  openGraph: {
    title: "dog nail clipping in Vadodara | VadodaraExperts",
    description: "Professional dog nail clipping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/dog-nail-clipping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-nail-clipping-vadodara" />;
}
