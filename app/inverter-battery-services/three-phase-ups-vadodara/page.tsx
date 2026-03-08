import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Three phase UPS in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional three phase ups services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/three-phase-ups-vadodara" },
  openGraph: {
    title: "Three phase UPS in Vadodara | VadodaraExperts",
    description: "Professional three phase ups services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/three-phase-ups-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="three-phase-ups-vadodara" />;
}
