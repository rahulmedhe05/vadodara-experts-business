import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "OTG thermostat repair in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional otg thermostat repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/otg-thermostat-repair-vadodara" },
  openGraph: {
    title: "OTG thermostat repair in Vadodara | VadodaraExperts",
    description: "Professional otg thermostat repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/otg-thermostat-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="otg-thermostat-repair-vadodara" />;
}
