import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "pet care centre in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional pet care centre services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/pet-care-centre-vadodara" },
  openGraph: {
    title: "pet care centre in Vadodara | VadodaraExperts",
    description: "Professional pet care centre services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/pet-care-centre-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-care-centre-vadodara" />;
}
