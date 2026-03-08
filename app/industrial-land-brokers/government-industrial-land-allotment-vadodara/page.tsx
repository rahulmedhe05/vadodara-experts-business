import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "government industrial land allotment in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional government industrial land allotment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/government-industrial-land-allotment-vadodara" },
  openGraph: {
    title: "government industrial land allotment in Vadodara | VadodaraExperts",
    description: "Professional government industrial land allotment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/government-industrial-land-allotment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="government-industrial-land-allotment-vadodara" />;
}
