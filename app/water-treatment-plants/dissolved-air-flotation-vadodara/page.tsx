import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "dissolved air flotation in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional dissolved air flotation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/dissolved-air-flotation-vadodara" },
  openGraph: {
    title: "dissolved air flotation in Vadodara | VadodaraExperts",
    description: "Professional dissolved air flotation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/dissolved-air-flotation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dissolved-air-flotation-vadodara" />;
}
