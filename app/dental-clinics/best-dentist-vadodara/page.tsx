import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Best dentist in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional best dentist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/best-dentist-vadodara" },
  openGraph: {
    title: "Best dentist in Vadodara | VadodaraExperts",
    description: "Professional best dentist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/best-dentist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-dentist-vadodara" />;
}
