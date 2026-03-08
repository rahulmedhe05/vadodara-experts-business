import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Level 3 charger in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional level 3 charger services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/level-3-charger-vadodara" },
  openGraph: {
    title: "Level 3 charger in Vadodara | VadodaraExperts",
    description: "Professional level 3 charger services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/level-3-charger-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="level-3-charger-vadodara" />;
}
