import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "pet dandruff treatment in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional pet dandruff treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/pet-dandruff-treatment-vadodara" },
  openGraph: {
    title: "pet dandruff treatment in Vadodara | VadodaraExperts",
    description: "Professional pet dandruff treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/pet-dandruff-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-dandruff-treatment-vadodara" />;
}
