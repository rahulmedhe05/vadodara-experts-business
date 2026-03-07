import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "painting for oil and gas in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional painting for oil and gas services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/painting-for-oil-and-gas-vadodara" },
  openGraph: {
    title: "painting for oil and gas in Vadodara | VadodaraExperts",
    description: "Professional painting for oil and gas services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/painting-for-oil-and-gas-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="painting-for-oil-and-gas-vadodara" />;
}
