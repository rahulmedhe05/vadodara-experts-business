import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "roof ventilator in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional roof ventilator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/roof-ventilator-vadodara" },
  openGraph: {
    title: "roof ventilator in Vadodara | VadodaraExperts",
    description: "Professional roof ventilator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/roof-ventilator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-ventilator-vadodara" />;
}
