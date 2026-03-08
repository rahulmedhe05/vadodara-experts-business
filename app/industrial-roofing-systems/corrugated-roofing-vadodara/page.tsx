import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "corrugated roofing in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional corrugated roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/corrugated-roofing-vadodara" },
  openGraph: {
    title: "corrugated roofing in Vadodara | VadodaraExperts",
    description: "Professional corrugated roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/corrugated-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corrugated-roofing-vadodara" />;
}
