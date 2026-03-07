import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "bungalow builder in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional bungalow builder services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/bungalow-builder-vadodara" },
  openGraph: {
    title: "bungalow builder in Vadodara | VadodaraExperts",
    description: "Professional bungalow builder services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/bungalow-builder-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bungalow-builder-vadodara" />;
}
