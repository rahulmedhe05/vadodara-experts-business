import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "smart thermostat in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional smart thermostat services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/smart-thermostat-vadodara" },
  openGraph: {
    title: "smart thermostat in Vadodara | VadodaraExperts",
    description: "Professional smart thermostat services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/smart-thermostat-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-thermostat-vadodara" />;
}
