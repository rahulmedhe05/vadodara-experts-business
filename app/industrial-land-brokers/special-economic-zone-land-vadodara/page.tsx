import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "special economic zone land in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional special economic zone land services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/special-economic-zone-land-vadodara" },
  openGraph: {
    title: "special economic zone land in Vadodara | VadodaraExperts",
    description: "Professional special economic zone land services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/special-economic-zone-land-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="special-economic-zone-land-vadodara" />;
}
