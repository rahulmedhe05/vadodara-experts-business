import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roof leak repair industrial in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roof leak repair industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roof-leak-repair-industrial-vadodara" },
  openGraph: {
    title: "roof leak repair industrial in Vadodara | VadodaraExperts",
    description: "Professional roof leak repair industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roof-leak-repair-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-leak-repair-industrial-vadodara" />;
}
