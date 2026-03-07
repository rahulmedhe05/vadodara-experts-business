import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "trailer transportation in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional trailer transportation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/trailer-transportation-vadodara" },
  openGraph: {
    title: "trailer transportation in Vadodara | VadodaraExperts",
    description: "Professional trailer transportation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/trailer-transportation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trailer-transportation-vadodara" />;
}
