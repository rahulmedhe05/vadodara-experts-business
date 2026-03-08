import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "land use conversion broker in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional land use conversion broker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/land-use-conversion-broker-vadodara" },
  openGraph: {
    title: "land use conversion broker in Vadodara | VadodaraExperts",
    description: "Professional land use conversion broker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/land-use-conversion-broker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-use-conversion-broker-vadodara" />;
}
