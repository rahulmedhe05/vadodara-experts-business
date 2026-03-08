import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking shed in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-shed-vadodara" },
  openGraph: {
    title: "parking shed in Vadodara | VadodaraExperts",
    description: "Professional parking shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-shed-vadodara" />;
}
