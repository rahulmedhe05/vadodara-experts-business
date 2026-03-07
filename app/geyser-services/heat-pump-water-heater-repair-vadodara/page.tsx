import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Heat pump water heater repair in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional heat pump water heater repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/heat-pump-water-heater-repair-vadodara" },
  openGraph: {
    title: "Heat pump water heater repair in Vadodara | VadodaraExperts",
    description: "Professional heat pump water heater repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/heat-pump-water-heater-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heat-pump-water-heater-repair-vadodara" />;
}
