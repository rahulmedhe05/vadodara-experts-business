import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Residential EV charging in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional residential ev charging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/residential-ev-charging-vadodara" },
  openGraph: {
    title: "Residential EV charging in Vadodara | VadodaraExperts",
    description: "Professional residential ev charging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/residential-ev-charging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-ev-charging-vadodara" />;
}
