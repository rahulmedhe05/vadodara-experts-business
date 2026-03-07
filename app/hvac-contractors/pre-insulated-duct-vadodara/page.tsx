import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "pre-insulated duct in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional pre-insulated duct services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/pre-insulated-duct-vadodara" },
  openGraph: {
    title: "pre-insulated duct in Vadodara | VadodaraExperts",
    description: "Professional pre-insulated duct services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/pre-insulated-duct-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-insulated-duct-vadodara" />;
}
