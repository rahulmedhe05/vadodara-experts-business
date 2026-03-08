import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Tubular battery in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional tubular battery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/tubular-battery-vadodara" },
  openGraph: {
    title: "Tubular battery in Vadodara | VadodaraExperts",
    description: "Professional tubular battery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/tubular-battery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tubular-battery-vadodara" />;
}
