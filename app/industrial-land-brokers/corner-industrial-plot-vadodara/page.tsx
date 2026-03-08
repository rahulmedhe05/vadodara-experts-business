import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "corner industrial plot in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional corner industrial plot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/corner-industrial-plot-vadodara" },
  openGraph: {
    title: "corner industrial plot in Vadodara | VadodaraExperts",
    description: "Professional corner industrial plot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/corner-industrial-plot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corner-industrial-plot-vadodara" />;
}
