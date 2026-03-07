import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "designated consumer energy in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional designated consumer energy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/designated-consumer-energy-vadodara" },
  openGraph: {
    title: "designated consumer energy in Vadodara | VadodaraExperts",
    description: "Professional designated consumer energy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/designated-consumer-energy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="designated-consumer-energy-vadodara" />;
}
