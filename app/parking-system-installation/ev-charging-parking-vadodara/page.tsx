import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "EV charging parking in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional ev charging parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/ev-charging-parking-vadodara" },
  openGraph: {
    title: "EV charging parking in Vadodara | VadodaraExperts",
    description: "Professional ev charging parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/ev-charging-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ev-charging-parking-vadodara" />;
}
