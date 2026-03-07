import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Su-Kam battery in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional su-kam battery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/su-kam-battery-vadodara" },
  openGraph: {
    title: "Su-Kam battery in Vadodara | VadodaraExperts",
    description: "Professional su-kam battery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/su-kam-battery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="su-kam-battery-vadodara" />;
}
