import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "air washer system in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional air washer system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/air-washer-system-vadodara" },
  openGraph: {
    title: "air washer system in Vadodara | VadodaraExperts",
    description: "Professional air washer system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/air-washer-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="air-washer-system-vadodara" />;
}
