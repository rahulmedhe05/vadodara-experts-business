import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roofing sheet per meter in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roofing sheet per meter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-sheet-per-meter-vadodara" },
  openGraph: {
    title: "roofing sheet per meter in Vadodara | VadodaraExperts",
    description: "Professional roofing sheet per meter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-sheet-per-meter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roofing-sheet-per-meter-vadodara" />;
}
