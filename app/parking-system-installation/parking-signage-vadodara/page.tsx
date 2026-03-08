import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking signage in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking signage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-signage-vadodara" },
  openGraph: {
    title: "parking signage in Vadodara | VadodaraExperts",
    description: "Professional parking signage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-signage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-signage-vadodara" />;
}
