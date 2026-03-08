import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking LED display in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking led display services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-led-display-vadodara" },
  openGraph: {
    title: "parking LED display in Vadodara | VadodaraExperts",
    description: "Professional parking led display services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-led-display-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-led-display-vadodara" />;
}
