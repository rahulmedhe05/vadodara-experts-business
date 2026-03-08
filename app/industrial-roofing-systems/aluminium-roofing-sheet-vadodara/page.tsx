import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "aluminium roofing sheet in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional aluminium roofing sheet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/aluminium-roofing-sheet-vadodara" },
  openGraph: {
    title: "aluminium roofing sheet in Vadodara | VadodaraExperts",
    description: "Professional aluminium roofing sheet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/aluminium-roofing-sheet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-roofing-sheet-vadodara" />;
}
