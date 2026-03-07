import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "metal parking shade in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional metal parking shade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/metal-parking-shade-vadodara" },
  openGraph: {
    title: "metal parking shade in Vadodara | VadodaraExperts",
    description: "Professional metal parking shade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/metal-parking-shade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="metal-parking-shade-vadodara" />;
}
