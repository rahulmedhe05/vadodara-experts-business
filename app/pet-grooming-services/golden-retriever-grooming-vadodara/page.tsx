import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "golden retriever grooming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional golden retriever grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/golden-retriever-grooming-vadodara" },
  openGraph: {
    title: "golden retriever grooming in Vadodara | VadodaraExperts",
    description: "Professional golden retriever grooming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/golden-retriever-grooming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="golden-retriever-grooming-vadodara" />;
}
