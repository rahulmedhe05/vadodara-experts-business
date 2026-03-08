import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "indie dog boarding in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional indie dog boarding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/indie-dog-boarding-vadodara" },
  openGraph: {
    title: "indie dog boarding in Vadodara | VadodaraExperts",
    description: "Professional indie dog boarding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/indie-dog-boarding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="indie-dog-boarding-vadodara" />;
}
