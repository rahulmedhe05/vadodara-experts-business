import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "pet pharmacy in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional pet pharmacy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/pet-pharmacy-vadodara" },
  openGraph: {
    title: "pet pharmacy in Vadodara | VadodaraExperts",
    description: "Professional pet pharmacy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/pet-pharmacy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-pharmacy-vadodara" />;
}
