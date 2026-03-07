import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "precision AC industrial in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional precision ac industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/precision-ac-industrial-vadodara" },
  openGraph: {
    title: "precision AC industrial in Vadodara | VadodaraExperts",
    description: "Professional precision ac industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/precision-ac-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="precision-ac-industrial-vadodara" />;
}
