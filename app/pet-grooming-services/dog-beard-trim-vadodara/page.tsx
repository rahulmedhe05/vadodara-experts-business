import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "dog beard trim in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional dog beard trim services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/dog-beard-trim-vadodara" },
  openGraph: {
    title: "dog beard trim in Vadodara | VadodaraExperts",
    description: "Professional dog beard trim services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/dog-beard-trim-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-beard-trim-vadodara" />;
}
