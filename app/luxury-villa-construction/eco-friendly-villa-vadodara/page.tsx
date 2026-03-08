import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "eco friendly villa in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional eco friendly villa services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/eco-friendly-villa-vadodara" },
  openGraph: {
    title: "eco friendly villa in Vadodara | VadodaraExperts",
    description: "Professional eco friendly villa services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/eco-friendly-villa-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="eco-friendly-villa-vadodara" />;
}
