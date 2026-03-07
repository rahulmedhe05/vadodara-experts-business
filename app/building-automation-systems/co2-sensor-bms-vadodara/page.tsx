import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "CO2 sensor BMS in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional co2 sensor bms services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/co2-sensor-bms-vadodara" },
  openGraph: {
    title: "CO2 sensor BMS in Vadodara | VadodaraExperts",
    description: "Professional co2 sensor bms services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/co2-sensor-bms-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co2-sensor-bms-vadodara" />;
}
