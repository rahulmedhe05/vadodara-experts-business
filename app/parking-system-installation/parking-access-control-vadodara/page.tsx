import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking access control in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking access control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-access-control-vadodara" },
  openGraph: {
    title: "parking access control in Vadodara | VadodaraExperts",
    description: "Professional parking access control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-access-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-access-control-vadodara" />;
}
