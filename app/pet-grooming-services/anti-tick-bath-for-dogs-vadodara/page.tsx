import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "anti tick bath for dogs in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional anti tick bath for dogs services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/anti-tick-bath-for-dogs-vadodara" },
  openGraph: {
    title: "anti tick bath for dogs in Vadodara | VadodaraExperts",
    description: "Professional anti tick bath for dogs services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/anti-tick-bath-for-dogs-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-tick-bath-for-dogs-vadodara" />;
}
