import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Best physiotherapist in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional best physiotherapist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/best-physiotherapist-vadodara" },
  openGraph: {
    title: "Best physiotherapist in Vadodara | VadodaraExperts",
    description: "Professional best physiotherapist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/best-physiotherapist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-physiotherapist-vadodara" />;
}
