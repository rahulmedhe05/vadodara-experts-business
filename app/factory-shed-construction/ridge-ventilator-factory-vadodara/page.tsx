import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "ridge ventilator factory in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional ridge ventilator factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/ridge-ventilator-factory-vadodara" },
  openGraph: {
    title: "ridge ventilator factory in Vadodara | VadodaraExperts",
    description: "Professional ridge ventilator factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/ridge-ventilator-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ridge-ventilator-factory-vadodara" />;
}
