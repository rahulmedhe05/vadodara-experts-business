import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roofing sheet per sq ft in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roofing sheet per sq ft services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-sheet-per-sq-ft-vadodara" },
  openGraph: {
    title: "roofing sheet per sq ft in Vadodara | VadodaraExperts",
    description: "Professional roofing sheet per sq ft services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-sheet-per-sq-ft-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roofing-sheet-per-sq-ft-vadodara" />;
}
