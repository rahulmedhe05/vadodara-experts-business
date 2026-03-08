import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "pet paw care in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional pet paw care services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/pet-paw-care-vadodara" },
  openGraph: {
    title: "pet paw care in Vadodara | VadodaraExperts",
    description: "Professional pet paw care services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/pet-paw-care-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-paw-care-vadodara" />;
}
