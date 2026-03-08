import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Home visit physiotherapist in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional home visit physiotherapist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/home-visit-physiotherapist-vadodara" },
  openGraph: {
    title: "Home visit physiotherapist in Vadodara | VadodaraExperts",
    description: "Professional home visit physiotherapist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/home-visit-physiotherapist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-visit-physiotherapist-vadodara" />;
}
