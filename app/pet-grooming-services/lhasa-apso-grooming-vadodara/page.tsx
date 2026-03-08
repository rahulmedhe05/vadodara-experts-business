import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "lhasa apso grooming in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional lhasa apso grooming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/lhasa-apso-grooming-vadodara" },
  openGraph: {
    title: "lhasa apso grooming in Vadodara | VadodaraExperts",
    description: "Professional lhasa apso grooming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/lhasa-apso-grooming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lhasa-apso-grooming-vadodara" />;
}
