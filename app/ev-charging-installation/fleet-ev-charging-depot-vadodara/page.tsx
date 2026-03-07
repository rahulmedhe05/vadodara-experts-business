import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Fleet EV charging depot in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional fleet ev charging depot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/fleet-ev-charging-depot-vadodara" },
  openGraph: {
    title: "Fleet EV charging depot in Vadodara | VadodaraExperts",
    description: "Professional fleet ev charging depot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/fleet-ev-charging-depot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fleet-ev-charging-depot-vadodara" />;
}
