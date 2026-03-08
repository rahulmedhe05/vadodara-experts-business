import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "anti rabies vaccine for dogs in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional anti rabies vaccine for dogs services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/anti-rabies-vaccine-for-dogs-vadodara" },
  openGraph: {
    title: "anti rabies vaccine for dogs in Vadodara | VadodaraExperts",
    description: "Professional anti rabies vaccine for dogs services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/anti-rabies-vaccine-for-dogs-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-rabies-vaccine-for-dogs-vadodara" />;
}
