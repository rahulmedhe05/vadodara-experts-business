import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "industrial land for logistics park in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional industrial land for logistics park services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-for-logistics-park-vadodara" },
  openGraph: {
    title: "industrial land for logistics park in Vadodara | VadodaraExperts",
    description: "Professional industrial land for logistics park services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-for-logistics-park-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-land-for-logistics-park-vadodara" />;
}
