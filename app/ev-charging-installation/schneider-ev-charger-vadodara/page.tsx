import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Schneider EV charger in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional schneider ev charger services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/schneider-ev-charger-vadodara" },
  openGraph: {
    title: "Schneider EV charger in Vadodara | VadodaraExperts",
    description: "Professional schneider ev charger services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/schneider-ev-charger-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="schneider-ev-charger-vadodara" />;
}
