import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Fluoride treatment kids in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional fluoride treatment kids services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/fluoride-treatment-kids-vadodara" },
  openGraph: {
    title: "Fluoride treatment kids in Vadodara | VadodaraExperts",
    description: "Professional fluoride treatment kids services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/fluoride-treatment-kids-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fluoride-treatment-kids-vadodara" />;
}
