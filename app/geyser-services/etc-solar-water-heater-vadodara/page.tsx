import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "ETC solar water heater in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional etc solar water heater services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/etc-solar-water-heater-vadodara" },
  openGraph: {
    title: "ETC solar water heater in Vadodara | VadodaraExperts",
    description: "Professional etc solar water heater services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/etc-solar-water-heater-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="etc-solar-water-heater-vadodara" />;
}
