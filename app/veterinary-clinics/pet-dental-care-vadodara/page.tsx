import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "pet dental care in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional pet dental care services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/pet-dental-care-vadodara" },
  openGraph: {
    title: "pet dental care in Vadodara | VadodaraExperts",
    description: "Professional pet dental care services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/pet-dental-care-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-dental-care-vadodara" />;
}
