import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "tyre killer in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional tyre killer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/tyre-killer-vadodara" },
  openGraph: {
    title: "tyre killer in Vadodara | VadodaraExperts",
    description: "Professional tyre killer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/tyre-killer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tyre-killer-vadodara" />;
}
