import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "industrial land for IT park in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional industrial land for it park services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-for-it-park-vadodara" },
  openGraph: {
    title: "industrial land for IT park in Vadodara | VadodaraExperts",
    description: "Professional industrial land for it park services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-for-it-park-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-land-for-it-park-vadodara" />;
}
