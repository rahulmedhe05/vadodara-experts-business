import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "PP duct in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional pp duct services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/pp-duct-vadodara" },
  openGraph: {
    title: "PP duct in Vadodara | VadodaraExperts",
    description: "Professional pp duct services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/pp-duct-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pp-duct-vadodara" />;
}
