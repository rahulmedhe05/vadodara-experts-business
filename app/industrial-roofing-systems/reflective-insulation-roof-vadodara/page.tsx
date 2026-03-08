import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "reflective insulation roof in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional reflective insulation roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/reflective-insulation-roof-vadodara" },
  openGraph: {
    title: "reflective insulation roof in Vadodara | VadodaraExperts",
    description: "Professional reflective insulation roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/reflective-insulation-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reflective-insulation-roof-vadodara" />;
}
