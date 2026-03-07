import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "luxury villa interior in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional luxury villa interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/luxury-villa-interior-vadodara" },
  openGraph: {
    title: "luxury villa interior in Vadodara | VadodaraExperts",
    description: "Professional luxury villa interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/luxury-villa-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="luxury-villa-interior-vadodara" />;
}
