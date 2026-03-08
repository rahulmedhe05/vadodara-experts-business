import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "pet hair trimming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional pet hair trimming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/pet-hair-trimming-vadodara" },
  openGraph: {
    title: "pet hair trimming in Vadodara | VadodaraExperts",
    description: "Professional pet hair trimming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/pet-hair-trimming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-hair-trimming-vadodara" />;
}
