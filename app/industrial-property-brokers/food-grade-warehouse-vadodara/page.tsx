import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "food grade warehouse in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional food grade warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/food-grade-warehouse-vadodara" },
  openGraph: {
    title: "food grade warehouse in Vadodara | VadodaraExperts",
    description: "Professional food grade warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/food-grade-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="food-grade-warehouse-vadodara" />;
}
