import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "pet emergency hospital in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional pet emergency hospital services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/pet-emergency-hospital-vadodara" },
  openGraph: {
    title: "pet emergency hospital in Vadodara | VadodaraExperts",
    description: "Professional pet emergency hospital services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/pet-emergency-hospital-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-emergency-hospital-vadodara" />;
}
