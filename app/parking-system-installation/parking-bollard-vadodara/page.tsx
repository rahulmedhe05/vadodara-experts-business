import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking bollard in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking bollard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-bollard-vadodara" },
  openGraph: {
    title: "parking bollard in Vadodara | VadodaraExperts",
    description: "Professional parking bollard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-bollard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-bollard-vadodara" />;
}
