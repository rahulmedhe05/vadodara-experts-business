import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "energy monitoring system in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional energy monitoring system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/energy-monitoring-system-vadodara" },
  openGraph: {
    title: "energy monitoring system in Vadodara | VadodaraExperts",
    description: "Professional energy monitoring system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/energy-monitoring-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="energy-monitoring-system-vadodara" />;
}
