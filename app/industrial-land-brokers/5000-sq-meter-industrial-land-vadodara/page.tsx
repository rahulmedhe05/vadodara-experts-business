import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "5000 sq meter industrial land in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional 5000 sq meter industrial land services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/5000-sq-meter-industrial-land-vadodara" },
  openGraph: {
    title: "5000 sq meter industrial land in Vadodara | VadodaraExperts",
    description: "Professional 5000 sq meter industrial land services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/5000-sq-meter-industrial-land-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="5000-sq-meter-industrial-land-vadodara" />;
}
