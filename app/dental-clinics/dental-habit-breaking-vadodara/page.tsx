import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Dental habit breaking in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional dental habit breaking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/dental-habit-breaking-vadodara" },
  openGraph: {
    title: "Dental habit breaking in Vadodara | VadodaraExperts",
    description: "Professional dental habit breaking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/dental-habit-breaking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dental-habit-breaking-vadodara" />;
}
