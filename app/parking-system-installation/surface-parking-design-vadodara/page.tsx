import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "surface parking design in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional surface parking design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/surface-parking-design-vadodara" },
  openGraph: {
    title: "surface parking design in Vadodara | VadodaraExperts",
    description: "Professional surface parking design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/surface-parking-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="surface-parking-design-vadodara" />;
}
