import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "pet vaccination in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional pet vaccination services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/pet-vaccination-vadodara" },
  openGraph: {
    title: "pet vaccination in Vadodara | VadodaraExperts",
    description: "Professional pet vaccination services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/pet-vaccination-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-vaccination-vadodara" />;
}
