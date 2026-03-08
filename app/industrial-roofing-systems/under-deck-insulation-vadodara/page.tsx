import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "under deck insulation in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional under deck insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/under-deck-insulation-vadodara" },
  openGraph: {
    title: "under deck insulation in Vadodara | VadodaraExperts",
    description: "Professional under deck insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/under-deck-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="under-deck-insulation-vadodara" />;
}
