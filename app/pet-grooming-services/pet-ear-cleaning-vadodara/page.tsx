import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "pet ear cleaning in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional pet ear cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/pet-ear-cleaning-vadodara" },
  openGraph: {
    title: "pet ear cleaning in Vadodara | VadodaraExperts",
    description: "Professional pet ear cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/pet-ear-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-ear-cleaning-vadodara" />;
}
