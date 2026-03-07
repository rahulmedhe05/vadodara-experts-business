import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "hydraulic parking system in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional hydraulic parking system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/hydraulic-parking-system-vadodara" },
  openGraph: {
    title: "hydraulic parking system in Vadodara | VadodaraExperts",
    description: "Professional hydraulic parking system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/hydraulic-parking-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hydraulic-parking-system-vadodara" />;
}
