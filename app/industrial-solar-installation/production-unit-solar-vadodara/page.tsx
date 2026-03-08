import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "production unit solar in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional production unit solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/production-unit-solar-vadodara" },
  openGraph: {
    title: "production unit solar in Vadodara | VadodaraExperts",
    description: "Professional production unit solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/production-unit-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="production-unit-solar-vadodara" />;
}
