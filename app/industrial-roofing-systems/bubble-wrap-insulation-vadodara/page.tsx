import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "bubble wrap insulation in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional bubble wrap insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/bubble-wrap-insulation-vadodara" },
  openGraph: {
    title: "bubble wrap insulation in Vadodara | VadodaraExperts",
    description: "Professional bubble wrap insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/bubble-wrap-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bubble-wrap-insulation-vadodara" />;
}
