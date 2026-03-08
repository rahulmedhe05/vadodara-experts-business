import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "large dog boarding in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional large dog boarding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/large-dog-boarding-vadodara" },
  openGraph: {
    title: "large dog boarding in Vadodara | VadodaraExperts",
    description: "Professional large dog boarding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/large-dog-boarding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="large-dog-boarding-vadodara" />;
}
