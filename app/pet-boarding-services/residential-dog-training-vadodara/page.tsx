import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "residential dog training in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional residential dog training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/residential-dog-training-vadodara" },
  openGraph: {
    title: "residential dog training in Vadodara | VadodaraExperts",
    description: "Professional residential dog training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/residential-dog-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-dog-training-vadodara" />;
}
