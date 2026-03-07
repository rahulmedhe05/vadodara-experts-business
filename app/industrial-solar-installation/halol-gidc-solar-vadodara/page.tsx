import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "Halol GIDC solar in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional halol gidc solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/halol-gidc-solar-vadodara" },
  openGraph: {
    title: "Halol GIDC solar in Vadodara | VadodaraExperts",
    description: "Professional halol gidc solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/halol-gidc-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="halol-gidc-solar-vadodara" />;
}
