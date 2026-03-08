import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roof waterproofing industrial in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roof waterproofing industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roof-waterproofing-industrial-vadodara" },
  openGraph: {
    title: "roof waterproofing industrial in Vadodara | VadodaraExperts",
    description: "Professional roof waterproofing industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roof-waterproofing-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-waterproofing-industrial-vadodara" />;
}
