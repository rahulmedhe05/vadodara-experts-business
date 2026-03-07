import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking fire safety in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking fire safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-fire-safety-vadodara" },
  openGraph: {
    title: "parking fire safety in Vadodara | VadodaraExperts",
    description: "Professional parking fire safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-fire-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-fire-safety-vadodara" />;
}
