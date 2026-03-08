import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "villa with terrace garden in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional villa with terrace garden services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/villa-with-terrace-garden-vadodara" },
  openGraph: {
    title: "villa with terrace garden in Vadodara | VadodaraExperts",
    description: "Professional villa with terrace garden services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/villa-with-terrace-garden-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="villa-with-terrace-garden-vadodara" />;
}
