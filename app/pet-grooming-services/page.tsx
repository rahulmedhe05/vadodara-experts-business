import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "Pet Grooming Services in Vadodara | VadodaraExperts",
  description: "Find the best pet grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services" },
  openGraph: {
    title: "Pet Grooming Services in Vadodara | VadodaraExperts",
    description: "Find the best pet grooming services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/pet-grooming-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
