import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "man cooler fan in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional man cooler fan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/man-cooler-fan-vadodara" },
  openGraph: {
    title: "man cooler fan in Vadodara | VadodaraExperts",
    description: "Professional man cooler fan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/man-cooler-fan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="man-cooler-fan-vadodara" />;
}
