import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking line painting in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking line painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-line-painting-vadodara" },
  openGraph: {
    title: "parking line painting in Vadodara | VadodaraExperts",
    description: "Professional parking line painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-line-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-line-painting-vadodara" />;
}
