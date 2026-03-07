import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "PET strapping in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional pet strapping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/pet-strapping-vadodara" },
  openGraph: {
    title: "PET strapping in Vadodara | VadodaraExperts",
    description: "Professional pet strapping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/pet-strapping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-strapping-vadodara" />;
}
