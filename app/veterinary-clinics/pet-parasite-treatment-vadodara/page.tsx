import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "pet parasite treatment in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional pet parasite treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/pet-parasite-treatment-vadodara" },
  openGraph: {
    title: "pet parasite treatment in Vadodara | VadodaraExperts",
    description: "Professional pet parasite treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/pet-parasite-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-parasite-treatment-vadodara" />;
}
