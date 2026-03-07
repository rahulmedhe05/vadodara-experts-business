import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "food processing HVAC in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional food processing hvac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/food-processing-hvac-vadodara" },
  openGraph: {
    title: "food processing HVAC in Vadodara | VadodaraExperts",
    description: "Professional food processing hvac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/food-processing-hvac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="food-processing-hvac-vadodara" />;
}
