import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Battery exchange offer in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional battery exchange offer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/battery-exchange-offer-vadodara" },
  openGraph: {
    title: "Battery exchange offer in Vadodara | VadodaraExperts",
    description: "Professional battery exchange offer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/battery-exchange-offer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="battery-exchange-offer-vadodara" />;
}
