import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "specific energy consumption in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional specific energy consumption services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/specific-energy-consumption-vadodara" },
  openGraph: {
    title: "specific energy consumption in Vadodara | VadodaraExperts",
    description: "Professional specific energy consumption services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/specific-energy-consumption-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="specific-energy-consumption-vadodara" />;
}
