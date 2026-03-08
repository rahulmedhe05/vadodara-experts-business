import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "GIDC land agent in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional gidc land agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/gidc-land-agent-vadodara" },
  openGraph: {
    title: "GIDC land agent in Vadodara | VadodaraExperts",
    description: "Professional gidc land agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/gidc-land-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gidc-land-agent-vadodara" />;
}
