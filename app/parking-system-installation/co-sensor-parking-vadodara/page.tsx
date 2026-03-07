import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "CO sensor parking in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional co sensor parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/co-sensor-parking-vadodara" },
  openGraph: {
    title: "CO sensor parking in Vadodara | VadodaraExperts",
    description: "Professional co sensor parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/co-sensor-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co-sensor-parking-vadodara" />;
}
