import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "HVAC duct fabrication in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional hvac duct fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/hvac-duct-fabrication-vadodara" },
  openGraph: {
    title: "HVAC duct fabrication in Vadodara | VadodaraExperts",
    description: "Professional hvac duct fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/hvac-duct-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hvac-duct-fabrication-vadodara" />;
}
