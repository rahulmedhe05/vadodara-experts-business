import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Data center UPS in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional data center ups services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/data-center-ups-vadodara" },
  openGraph: {
    title: "Data center UPS in Vadodara | VadodaraExperts",
    description: "Professional data center ups services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/data-center-ups-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="data-center-ups-vadodara" />;
}
