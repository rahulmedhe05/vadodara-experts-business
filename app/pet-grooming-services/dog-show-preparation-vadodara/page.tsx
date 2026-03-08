import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "dog show preparation in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional dog show preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/dog-show-preparation-vadodara" },
  openGraph: {
    title: "dog show preparation in Vadodara | VadodaraExperts",
    description: "Professional dog show preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/dog-show-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-show-preparation-vadodara" />;
}
