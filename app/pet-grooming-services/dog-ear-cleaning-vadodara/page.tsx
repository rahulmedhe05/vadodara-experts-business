import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "dog ear cleaning in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional dog ear cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/dog-ear-cleaning-vadodara" },
  openGraph: {
    title: "dog ear cleaning in Vadodara | VadodaraExperts",
    description: "Professional dog ear cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/dog-ear-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-ear-cleaning-vadodara" />;
}
