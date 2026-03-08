import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "plate heat exchanger in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional plate heat exchanger services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/plate-heat-exchanger-vadodara" },
  openGraph: {
    title: "plate heat exchanger in Vadodara | VadodaraExperts",
    description: "Professional plate heat exchanger services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/plate-heat-exchanger-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plate-heat-exchanger-vadodara" />;
}
