import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "over deck insulation in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional over deck insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/over-deck-insulation-vadodara" },
  openGraph: {
    title: "over deck insulation in Vadodara | VadodaraExperts",
    description: "Professional over deck insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/over-deck-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="over-deck-insulation-vadodara" />;
}
