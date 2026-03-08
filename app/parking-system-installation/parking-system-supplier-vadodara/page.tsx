import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking system supplier in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking system supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-system-supplier-vadodara" },
  openGraph: {
    title: "parking system supplier in Vadodara | VadodaraExperts",
    description: "Professional parking system supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-system-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-system-supplier-vadodara" />;
}
