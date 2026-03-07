import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-generator-suppliers")!;

export const metadata: Metadata = {
  title: "generator acoustic enclosure in Vadodara | Industrial Generator Suppliers | VadodaraExperts",
  description: "Professional generator acoustic enclosure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-generator-suppliers/generator-acoustic-enclosure-vadodara" },
  openGraph: {
    title: "generator acoustic enclosure in Vadodara | VadodaraExperts",
    description: "Professional generator acoustic enclosure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-generator-suppliers/generator-acoustic-enclosure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="generator-acoustic-enclosure-vadodara" />;
}
