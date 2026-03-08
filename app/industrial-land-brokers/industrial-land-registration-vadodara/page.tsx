import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "industrial land registration in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional industrial land registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-registration-vadodara" },
  openGraph: {
    title: "industrial land registration in Vadodara | VadodaraExperts",
    description: "Professional industrial land registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-land-registration-vadodara" />;
}
