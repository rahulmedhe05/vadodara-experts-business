import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "pre-engineered steel building in Vadodara | PEB Building Construction | VadodaraExperts",
  description: "Professional pre-engineered steel building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction/pre-engineered-steel-building-vadodara" },
  openGraph: {
    title: "pre-engineered steel building in Vadodara | VadodaraExperts",
    description: "Professional pre-engineered steel building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/peb-building-construction/pre-engineered-steel-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-engineered-steel-building-vadodara" />;
}
