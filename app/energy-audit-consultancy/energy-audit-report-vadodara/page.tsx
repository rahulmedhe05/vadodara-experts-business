import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "energy audit report in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional energy audit report services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/energy-audit-report-vadodara" },
  openGraph: {
    title: "energy audit report in Vadodara | VadodaraExperts",
    description: "Professional energy audit report services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/energy-audit-report-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="energy-audit-report-vadodara" />;
}
