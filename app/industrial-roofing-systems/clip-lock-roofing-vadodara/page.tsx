import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "clip lock roofing in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional clip lock roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/clip-lock-roofing-vadodara" },
  openGraph: {
    title: "clip lock roofing in Vadodara | VadodaraExperts",
    description: "Professional clip lock roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/clip-lock-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clip-lock-roofing-vadodara" />;
}
