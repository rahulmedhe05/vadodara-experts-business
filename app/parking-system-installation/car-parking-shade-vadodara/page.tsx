import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "car parking shade in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional car parking shade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/car-parking-shade-vadodara" },
  openGraph: {
    title: "car parking shade in Vadodara | VadodaraExperts",
    description: "Professional car parking shade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/car-parking-shade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="car-parking-shade-vadodara" />;
}
