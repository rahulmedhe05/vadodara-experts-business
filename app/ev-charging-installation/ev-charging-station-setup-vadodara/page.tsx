import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "EV charging station setup in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional ev charging station setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/ev-charging-station-setup-vadodara" },
  openGraph: {
    title: "EV charging station setup in Vadodara | VadodaraExperts",
    description: "Professional ev charging station setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/ev-charging-station-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ev-charging-station-setup-vadodara" />;
}
