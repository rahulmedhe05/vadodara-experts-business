import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "small industrial plot in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional small industrial plot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/small-industrial-plot-vadodara" },
  openGraph: {
    title: "small industrial plot in Vadodara | VadodaraExperts",
    description: "Professional small industrial plot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/small-industrial-plot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="small-industrial-plot-vadodara" />;
}
