import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Inverter wiring work in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional inverter wiring work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/inverter-wiring-work-vadodara" },
  openGraph: {
    title: "Inverter wiring work in Vadodara | VadodaraExperts",
    description: "Professional inverter wiring work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/inverter-wiring-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="inverter-wiring-work-vadodara" />;
}
