import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "electric vehicle parking in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional electric vehicle parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/electric-vehicle-parking-vadodara" },
  openGraph: {
    title: "electric vehicle parking in Vadodara | VadodaraExperts",
    description: "Professional electric vehicle parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/electric-vehicle-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electric-vehicle-parking-vadodara" />;
}
