import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "Turbo ventilator in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional turbo ventilator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/turbo-ventilator-vadodara" },
  openGraph: {
    title: "Turbo ventilator in Vadodara | VadodaraExperts",
    description: "Professional turbo ventilator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/turbo-ventilator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turbo-ventilator-vadodara" />;
}
