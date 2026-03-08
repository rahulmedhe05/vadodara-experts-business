import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "pet clinic in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional pet clinic services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/pet-clinic-vadodara" },
  openGraph: {
    title: "pet clinic in Vadodara | VadodaraExperts",
    description: "Professional pet clinic services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/pet-clinic-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-clinic-vadodara" />;
}
