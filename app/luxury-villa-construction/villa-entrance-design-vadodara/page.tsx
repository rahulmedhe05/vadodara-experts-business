import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "villa entrance design in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional villa entrance design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/villa-entrance-design-vadodara" },
  openGraph: {
    title: "villa entrance design in Vadodara | VadodaraExperts",
    description: "Professional villa entrance design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/villa-entrance-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="villa-entrance-design-vadodara" />;
}
