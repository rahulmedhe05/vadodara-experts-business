import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "PEB ridge ventilator in Vadodara | PEB Building Construction | VadodaraExperts",
  description: "Professional peb ridge ventilator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction/peb-ridge-ventilator-vadodara" },
  openGraph: {
    title: "PEB ridge ventilator in Vadodara | VadodaraExperts",
    description: "Professional peb ridge ventilator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/peb-building-construction/peb-ridge-ventilator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-ridge-ventilator-vadodara" />;
}
