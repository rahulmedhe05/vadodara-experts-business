import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "industrial HVAC commissioning in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional industrial hvac commissioning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/industrial-hvac-commissioning-vadodara" },
  openGraph: {
    title: "industrial HVAC commissioning in Vadodara | VadodaraExperts",
    description: "Professional industrial hvac commissioning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/industrial-hvac-commissioning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-hvac-commissioning-vadodara" />;
}
