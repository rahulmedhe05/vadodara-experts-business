import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Urinary incontinence physio in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional urinary incontinence physio services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/urinary-incontinence-physio-vadodara" },
  openGraph: {
    title: "Urinary incontinence physio in Vadodara | VadodaraExperts",
    description: "Professional urinary incontinence physio services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/urinary-incontinence-physio-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="urinary-incontinence-physio-vadodara" />;
}
