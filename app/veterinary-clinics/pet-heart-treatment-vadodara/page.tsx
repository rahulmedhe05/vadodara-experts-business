import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "pet heart treatment in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional pet heart treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/pet-heart-treatment-vadodara" },
  openGraph: {
    title: "pet heart treatment in Vadodara | VadodaraExperts",
    description: "Professional pet heart treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/pet-heart-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-heart-treatment-vadodara" />;
}
