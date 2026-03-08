import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "energy audit cost in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional energy audit cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/energy-audit-cost-vadodara" },
  openGraph: {
    title: "energy audit cost in Vadodara | VadodaraExperts",
    description: "Professional energy audit cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/energy-audit-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="energy-audit-cost-vadodara" />;
}
