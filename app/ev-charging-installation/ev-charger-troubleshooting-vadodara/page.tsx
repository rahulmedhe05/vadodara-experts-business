import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "EV charger troubleshooting in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional ev charger troubleshooting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/ev-charger-troubleshooting-vadodara" },
  openGraph: {
    title: "EV charger troubleshooting in Vadodara | VadodaraExperts",
    description: "Professional ev charger troubleshooting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/ev-charger-troubleshooting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ev-charger-troubleshooting-vadodara" />;
}
