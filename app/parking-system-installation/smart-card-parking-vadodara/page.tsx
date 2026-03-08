import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "smart card parking in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional smart card parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/smart-card-parking-vadodara" },
  openGraph: {
    title: "smart card parking in Vadodara | VadodaraExperts",
    description: "Professional smart card parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/smart-card-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-card-parking-vadodara" />;
}
