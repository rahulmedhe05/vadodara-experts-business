import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking ticket machine in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking ticket machine services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-ticket-machine-vadodara" },
  openGraph: {
    title: "parking ticket machine in Vadodara | VadodaraExperts",
    description: "Professional parking ticket machine services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-ticket-machine-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-ticket-machine-vadodara" />;
}
