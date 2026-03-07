import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "turbidity removal in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional turbidity removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/turbidity-removal-vadodara" },
  openGraph: {
    title: "turbidity removal in Vadodara | VadodaraExperts",
    description: "Professional turbidity removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/turbidity-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turbidity-removal-vadodara" />;
}
