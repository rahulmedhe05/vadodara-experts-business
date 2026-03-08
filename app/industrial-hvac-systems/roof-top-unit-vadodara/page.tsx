import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "roof top unit in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional roof top unit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/roof-top-unit-vadodara" },
  openGraph: {
    title: "roof top unit in Vadodara | VadodaraExperts",
    description: "Professional roof top unit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/roof-top-unit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-top-unit-vadodara" />;
}
