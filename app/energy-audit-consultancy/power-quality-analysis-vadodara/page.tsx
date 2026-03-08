import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "power quality analysis in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional power quality analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/power-quality-analysis-vadodara" },
  openGraph: {
    title: "power quality analysis in Vadodara | VadodaraExperts",
    description: "Professional power quality analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/power-quality-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-quality-analysis-vadodara" />;
}
