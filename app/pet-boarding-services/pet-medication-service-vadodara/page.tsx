import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "pet medication service in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional pet medication service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/pet-medication-service-vadodara" },
  openGraph: {
    title: "pet medication service in Vadodara | VadodaraExperts",
    description: "Professional pet medication service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/pet-medication-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-medication-service-vadodara" />;
}
