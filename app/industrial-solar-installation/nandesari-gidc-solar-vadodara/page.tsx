import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "Nandesari GIDC solar in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional nandesari gidc solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/nandesari-gidc-solar-vadodara" },
  openGraph: {
    title: "Nandesari GIDC solar in Vadodara | VadodaraExperts",
    description: "Professional nandesari gidc solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/nandesari-gidc-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nandesari-gidc-solar-vadodara" />;
}
