import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Inverter humming noise in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional inverter humming noise services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/inverter-humming-noise-vadodara" },
  openGraph: {
    title: "Inverter humming noise in Vadodara | VadodaraExperts",
    description: "Professional inverter humming noise services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/inverter-humming-noise-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="inverter-humming-noise-vadodara" />;
}
