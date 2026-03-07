import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "pet X-ray in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional pet x-ray services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/pet-x-ray-vadodara" },
  openGraph: {
    title: "pet X-ray in Vadodara | VadodaraExperts",
    description: "Professional pet x-ray services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/pet-x-ray-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-x-ray-vadodara" />;
}
