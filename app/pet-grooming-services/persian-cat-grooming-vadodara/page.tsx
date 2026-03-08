import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "persian cat grooming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional persian cat grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/persian-cat-grooming-vadodara" },
  openGraph: {
    title: "persian cat grooming in Vadodara | VadodaraExperts",
    description: "Professional persian cat grooming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/persian-cat-grooming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="persian-cat-grooming-vadodara" />;
}
