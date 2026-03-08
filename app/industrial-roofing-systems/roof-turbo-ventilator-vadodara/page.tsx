import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roof turbo ventilator in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roof turbo ventilator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roof-turbo-ventilator-vadodara" },
  openGraph: {
    title: "roof turbo ventilator in Vadodara | VadodaraExperts",
    description: "Professional roof turbo ventilator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roof-turbo-ventilator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-turbo-ventilator-vadodara" />;
}
