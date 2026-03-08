import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "retractable bollard in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional retractable bollard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/retractable-bollard-vadodara" },
  openGraph: {
    title: "retractable bollard in Vadodara | VadodaraExperts",
    description: "Professional retractable bollard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/retractable-bollard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="retractable-bollard-vadodara" />;
}
