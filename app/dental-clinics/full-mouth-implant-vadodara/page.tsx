import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Full mouth implant in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional full mouth implant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/full-mouth-implant-vadodara" },
  openGraph: {
    title: "Full mouth implant in Vadodara | VadodaraExperts",
    description: "Professional full mouth implant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/full-mouth-implant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="full-mouth-implant-vadodara" />;
}
