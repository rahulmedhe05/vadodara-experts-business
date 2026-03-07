import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "pet boarding for german shepherd in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional pet boarding for german shepherd services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/pet-boarding-for-german-shepherd-vadodara" },
  openGraph: {
    title: "pet boarding for german shepherd in Vadodara | VadodaraExperts",
    description: "Professional pet boarding for german shepherd services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/pet-boarding-for-german-shepherd-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-boarding-for-german-shepherd-vadodara" />;
}
