import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "fenced industrial plot in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional fenced industrial plot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/fenced-industrial-plot-vadodara" },
  openGraph: {
    title: "fenced industrial plot in Vadodara | VadodaraExperts",
    description: "Professional fenced industrial plot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/fenced-industrial-plot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fenced-industrial-plot-vadodara" />;
}
