import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "heavy duty flooring factory in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional heavy duty flooring factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/heavy-duty-flooring-factory-vadodara" },
  openGraph: {
    title: "heavy duty flooring factory in Vadodara | VadodaraExperts",
    description: "Professional heavy duty flooring factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/heavy-duty-flooring-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heavy-duty-flooring-factory-vadodara" />;
}
