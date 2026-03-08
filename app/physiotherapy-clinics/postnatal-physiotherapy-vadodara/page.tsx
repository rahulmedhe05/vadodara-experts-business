import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Postnatal physiotherapy in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional postnatal physiotherapy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/postnatal-physiotherapy-vadodara" },
  openGraph: {
    title: "Postnatal physiotherapy in Vadodara | VadodaraExperts",
    description: "Professional postnatal physiotherapy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/postnatal-physiotherapy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="postnatal-physiotherapy-vadodara" />;
}
