import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "painting for food industry in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional painting for food industry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/painting-for-food-industry-vadodara" },
  openGraph: {
    title: "painting for food industry in Vadodara | VadodaraExperts",
    description: "Professional painting for food industry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/painting-for-food-industry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="painting-for-food-industry-vadodara" />;
}
