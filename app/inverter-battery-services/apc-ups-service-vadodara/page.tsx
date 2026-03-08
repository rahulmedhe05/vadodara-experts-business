import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "APC UPS service in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional apc ups service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/apc-ups-service-vadodara" },
  openGraph: {
    title: "APC UPS service in Vadodara | VadodaraExperts",
    description: "Professional apc ups service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/apc-ups-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="apc-ups-service-vadodara" />;
}
