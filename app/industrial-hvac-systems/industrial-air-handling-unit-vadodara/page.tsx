import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "industrial air handling unit in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional industrial air handling unit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/industrial-air-handling-unit-vadodara" },
  openGraph: {
    title: "industrial air handling unit in Vadodara | VadodaraExperts",
    description: "Professional industrial air handling unit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/industrial-air-handling-unit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-air-handling-unit-vadodara" />;
}
