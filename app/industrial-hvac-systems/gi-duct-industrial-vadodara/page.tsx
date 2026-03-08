import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "GI duct industrial in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional gi duct industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/gi-duct-industrial-vadodara" },
  openGraph: {
    title: "GI duct industrial in Vadodara | VadodaraExperts",
    description: "Professional gi duct industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/gi-duct-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gi-duct-industrial-vadodara" />;
}
