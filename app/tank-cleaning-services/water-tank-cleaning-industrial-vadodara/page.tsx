import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "water tank cleaning industrial in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional water tank cleaning industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/water-tank-cleaning-industrial-vadodara" },
  openGraph: {
    title: "water tank cleaning industrial in Vadodara | VadodaraExperts",
    description: "Professional water tank cleaning industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/water-tank-cleaning-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-tank-cleaning-industrial-vadodara" />;
}
