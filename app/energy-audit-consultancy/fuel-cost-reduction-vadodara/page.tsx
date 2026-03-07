import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "fuel cost reduction in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional fuel cost reduction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/fuel-cost-reduction-vadodara" },
  openGraph: {
    title: "fuel cost reduction in Vadodara | VadodaraExperts",
    description: "Professional fuel cost reduction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/fuel-cost-reduction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fuel-cost-reduction-vadodara" />;
}
