import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "TOD tariff optimization in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional tod tariff optimization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/tod-tariff-optimization-vadodara" },
  openGraph: {
    title: "TOD tariff optimization in Vadodara | VadodaraExperts",
    description: "Professional tod tariff optimization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/tod-tariff-optimization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tod-tariff-optimization-vadodara" />;
}
