import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "RO plant company in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional ro plant company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/ro-plant-company-vadodara" },
  openGraph: {
    title: "RO plant company in Vadodara | VadodaraExperts",
    description: "Professional ro plant company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/ro-plant-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-plant-company-vadodara" />;
}
