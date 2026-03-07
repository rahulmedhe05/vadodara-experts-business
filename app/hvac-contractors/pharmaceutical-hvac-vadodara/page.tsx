import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "pharmaceutical HVAC in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional pharmaceutical hvac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/pharmaceutical-hvac-vadodara" },
  openGraph: {
    title: "pharmaceutical HVAC in Vadodara | VadodaraExperts",
    description: "Professional pharmaceutical hvac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/pharmaceutical-hvac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pharmaceutical-hvac-vadodara" />;
}
