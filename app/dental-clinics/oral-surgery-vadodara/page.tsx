import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Oral surgery in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional oral surgery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/oral-surgery-vadodara" },
  openGraph: {
    title: "Oral surgery in Vadodara | VadodaraExperts",
    description: "Professional oral surgery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/oral-surgery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="oral-surgery-vadodara" />;
}
