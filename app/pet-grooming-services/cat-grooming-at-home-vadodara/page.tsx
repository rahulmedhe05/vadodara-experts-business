import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "cat grooming at home in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional cat grooming at home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/cat-grooming-at-home-vadodara" },
  openGraph: {
    title: "cat grooming at home in Vadodara | VadodaraExperts",
    description: "Professional cat grooming at home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/cat-grooming-at-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cat-grooming-at-home-vadodara" />;
}
