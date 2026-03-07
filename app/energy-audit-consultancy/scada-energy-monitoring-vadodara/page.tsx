import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "SCADA energy monitoring in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional scada energy monitoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/scada-energy-monitoring-vadodara" },
  openGraph: {
    title: "SCADA energy monitoring in Vadodara | VadodaraExperts",
    description: "Professional scada energy monitoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/scada-energy-monitoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scada-energy-monitoring-vadodara" />;
}
