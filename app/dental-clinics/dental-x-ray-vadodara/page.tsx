import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Dental X ray in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional dental x ray services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/dental-x-ray-vadodara" },
  openGraph: {
    title: "Dental X ray in Vadodara | VadodaraExperts",
    description: "Professional dental x ray services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/dental-x-ray-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dental-x-ray-vadodara" />;
}
