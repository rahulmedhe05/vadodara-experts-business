import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Solar water heater repair in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional solar water heater repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/solar-water-heater-repair-vadodara" },
  openGraph: {
    title: "Solar water heater repair in Vadodara | VadodaraExperts",
    description: "Professional solar water heater repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/solar-water-heater-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-water-heater-repair-vadodara" />;
}
