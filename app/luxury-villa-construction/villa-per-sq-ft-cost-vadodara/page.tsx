import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "villa per sq ft cost in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional villa per sq ft cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/villa-per-sq-ft-cost-vadodara" },
  openGraph: {
    title: "villa per sq ft cost in Vadodara | VadodaraExperts",
    description: "Professional villa per sq ft cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/villa-per-sq-ft-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="villa-per-sq-ft-cost-vadodara" />;
}
