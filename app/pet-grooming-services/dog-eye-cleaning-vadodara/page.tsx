import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "dog eye cleaning in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional dog eye cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/dog-eye-cleaning-vadodara" },
  openGraph: {
    title: "dog eye cleaning in Vadodara | VadodaraExperts",
    description: "Professional dog eye cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/dog-eye-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-eye-cleaning-vadodara" />;
}
