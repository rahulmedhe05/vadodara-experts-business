import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking shade structure in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking shade structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-shade-structure-vadodara" },
  openGraph: {
    title: "parking shade structure in Vadodara | VadodaraExperts",
    description: "Professional parking shade structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-shade-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-shade-structure-vadodara" />;
}
