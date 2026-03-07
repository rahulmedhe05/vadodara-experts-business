import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "re-roofing factory in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional re-roofing factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/re-roofing-factory-vadodara" },
  openGraph: {
    title: "re-roofing factory in Vadodara | VadodaraExperts",
    description: "Professional re-roofing factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/re-roofing-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="re-roofing-factory-vadodara" />;
}
