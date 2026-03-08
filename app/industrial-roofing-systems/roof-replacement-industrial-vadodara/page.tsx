import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roof replacement industrial in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roof replacement industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roof-replacement-industrial-vadodara" },
  openGraph: {
    title: "roof replacement industrial in Vadodara | VadodaraExperts",
    description: "Professional roof replacement industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roof-replacement-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-replacement-industrial-vadodara" />;
}
