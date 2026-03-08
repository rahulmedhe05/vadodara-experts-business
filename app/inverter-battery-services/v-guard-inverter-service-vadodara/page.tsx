import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "V Guard inverter service in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional v guard inverter service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/v-guard-inverter-service-vadodara" },
  openGraph: {
    title: "V Guard inverter service in Vadodara | VadodaraExperts",
    description: "Professional v guard inverter service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/v-guard-inverter-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="v-guard-inverter-service-vadodara" />;
}
