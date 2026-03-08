import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Dental near me in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional dental near me services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/dental-near-me-vadodara" },
  openGraph: {
    title: "Dental near me in Vadodara | VadodaraExperts",
    description: "Professional dental near me services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/dental-near-me-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dental-near-me-vadodara" />;
}
