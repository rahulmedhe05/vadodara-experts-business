import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "dog daycare in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional dog daycare services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/dog-daycare-vadodara" },
  openGraph: {
    title: "dog daycare in Vadodara | VadodaraExperts",
    description: "Professional dog daycare services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/dog-daycare-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-daycare-vadodara" />;
}
