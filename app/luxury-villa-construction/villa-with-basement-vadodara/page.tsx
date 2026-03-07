import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "villa with basement in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional villa with basement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/villa-with-basement-vadodara" },
  openGraph: {
    title: "villa with basement in Vadodara | VadodaraExperts",
    description: "Professional villa with basement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/villa-with-basement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="villa-with-basement-vadodara" />;
}
