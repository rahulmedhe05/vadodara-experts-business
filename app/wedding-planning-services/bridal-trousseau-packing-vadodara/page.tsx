import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Bridal trousseau packing in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional bridal trousseau packing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/bridal-trousseau-packing-vadodara" },
  openGraph: {
    title: "Bridal trousseau packing in Vadodara | VadodaraExperts",
    description: "Professional bridal trousseau packing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/bridal-trousseau-packing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bridal-trousseau-packing-vadodara" />;
}
