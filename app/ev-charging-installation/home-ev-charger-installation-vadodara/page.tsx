import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Home EV charger installation in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional home ev charger installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/home-ev-charger-installation-vadodara" },
  openGraph: {
    title: "Home EV charger installation in Vadodara | VadodaraExperts",
    description: "Professional home ev charger installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/home-ev-charger-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-ev-charger-installation-vadodara" />;
}
