import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "galvalume roofing sheet in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional galvalume roofing sheet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/galvalume-roofing-sheet-vadodara" },
  openGraph: {
    title: "galvalume roofing sheet in Vadodara | VadodaraExperts",
    description: "Professional galvalume roofing sheet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/galvalume-roofing-sheet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="galvalume-roofing-sheet-vadodara" />;
}
