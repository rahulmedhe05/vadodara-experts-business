import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Parking lot EV charging in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional parking lot ev charging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/parking-lot-ev-charging-vadodara" },
  openGraph: {
    title: "Parking lot EV charging in Vadodara | VadodaraExperts",
    description: "Professional parking lot ev charging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/parking-lot-ev-charging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-lot-ev-charging-vadodara" />;
}
