import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "directional signage parking in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional directional signage parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/directional-signage-parking-vadodara" },
  openGraph: {
    title: "directional signage parking in Vadodara | VadodaraExperts",
    description: "Professional directional signage parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/directional-signage-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="directional-signage-parking-vadodara" />;
}
