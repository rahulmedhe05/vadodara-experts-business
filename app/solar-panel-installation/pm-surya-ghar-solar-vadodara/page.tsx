import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "PM Surya Ghar solar in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional pm surya ghar solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/pm-surya-ghar-solar-vadodara" },
  openGraph: {
    title: "PM Surya Ghar solar in Vadodara | VadodaraExperts",
    description: "Professional pm surya ghar solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/pm-surya-ghar-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pm-surya-ghar-solar-vadodara" />;
}
