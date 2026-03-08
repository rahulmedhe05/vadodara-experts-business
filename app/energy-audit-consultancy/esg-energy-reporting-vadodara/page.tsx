import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "ESG energy reporting in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional esg energy reporting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/esg-energy-reporting-vadodara" },
  openGraph: {
    title: "ESG energy reporting in Vadodara | VadodaraExperts",
    description: "Professional esg energy reporting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/esg-energy-reporting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="esg-energy-reporting-vadodara" />;
}
