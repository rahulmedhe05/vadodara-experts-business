import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Pit and fissure sealant in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional pit and fissure sealant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/pit-and-fissure-sealant-vadodara" },
  openGraph: {
    title: "Pit and fissure sealant in Vadodara | VadodaraExperts",
    description: "Professional pit and fissure sealant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/pit-and-fissure-sealant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pit-and-fissure-sealant-vadodara" />;
}
