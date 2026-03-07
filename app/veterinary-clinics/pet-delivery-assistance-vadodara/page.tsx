import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "pet delivery assistance in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional pet delivery assistance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/pet-delivery-assistance-vadodara" },
  openGraph: {
    title: "pet delivery assistance in Vadodara | VadodaraExperts",
    description: "Professional pet delivery assistance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/pet-delivery-assistance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-delivery-assistance-vadodara" />;
}
