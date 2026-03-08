import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "NA plot broker in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional na plot broker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/na-plot-broker-vadodara" },
  openGraph: {
    title: "NA plot broker in Vadodara | VadodaraExperts",
    description: "Professional na plot broker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/na-plot-broker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="na-plot-broker-vadodara" />;
}
