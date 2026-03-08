import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roof anchor point in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roof anchor point services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roof-anchor-point-vadodara" },
  openGraph: {
    title: "roof anchor point in Vadodara | VadodaraExperts",
    description: "Professional roof anchor point services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roof-anchor-point-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-anchor-point-vadodara" />;
}
