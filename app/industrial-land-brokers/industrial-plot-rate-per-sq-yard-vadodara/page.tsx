import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "industrial plot rate per sq yard in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional industrial plot rate per sq yard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/industrial-plot-rate-per-sq-yard-vadodara" },
  openGraph: {
    title: "industrial plot rate per sq yard in Vadodara | VadodaraExperts",
    description: "Professional industrial plot rate per sq yard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/industrial-plot-rate-per-sq-yard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-plot-rate-per-sq-yard-vadodara" />;
}
