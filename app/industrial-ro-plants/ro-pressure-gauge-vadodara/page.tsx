import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "RO pressure gauge in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional ro pressure gauge services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/ro-pressure-gauge-vadodara" },
  openGraph: {
    title: "RO pressure gauge in Vadodara | VadodaraExperts",
    description: "Professional ro pressure gauge services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/ro-pressure-gauge-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-pressure-gauge-vadodara" />;
}
