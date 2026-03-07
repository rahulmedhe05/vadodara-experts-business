import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "cocker spaniel grooming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional cocker spaniel grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/cocker-spaniel-grooming-vadodara" },
  openGraph: {
    title: "cocker spaniel grooming in Vadodara | VadodaraExperts",
    description: "Professional cocker spaniel grooming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/cocker-spaniel-grooming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cocker-spaniel-grooming-vadodara" />;
}
