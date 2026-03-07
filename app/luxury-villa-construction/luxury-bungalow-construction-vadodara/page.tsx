import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "luxury bungalow construction in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional luxury bungalow construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/luxury-bungalow-construction-vadodara" },
  openGraph: {
    title: "luxury bungalow construction in Vadodara | VadodaraExperts",
    description: "Professional luxury bungalow construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/luxury-bungalow-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="luxury-bungalow-construction-vadodara" />;
}
