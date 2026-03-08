import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Pediatric orthopedic physio in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional pediatric orthopedic physio services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/pediatric-orthopedic-physio-vadodara" },
  openGraph: {
    title: "Pediatric orthopedic physio in Vadodara | VadodaraExperts",
    description: "Professional pediatric orthopedic physio services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/pediatric-orthopedic-physio-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pediatric-orthopedic-physio-vadodara" />;
}
