import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "industrial estate solar in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional industrial estate solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/industrial-estate-solar-vadodara" },
  openGraph: {
    title: "industrial estate solar in Vadodara | VadodaraExperts",
    description: "Professional industrial estate solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/industrial-estate-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-estate-solar-vadodara" />;
}
