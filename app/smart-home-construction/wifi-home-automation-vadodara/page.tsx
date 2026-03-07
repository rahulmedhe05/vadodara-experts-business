import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "WiFi home automation in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional wifi home automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/wifi-home-automation-vadodara" },
  openGraph: {
    title: "WiFi home automation in Vadodara | VadodaraExperts",
    description: "Professional wifi home automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/wifi-home-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wifi-home-automation-vadodara" />;
}
