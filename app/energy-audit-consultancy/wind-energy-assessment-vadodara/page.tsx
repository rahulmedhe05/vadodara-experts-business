import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "wind energy assessment in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional wind energy assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/wind-energy-assessment-vadodara" },
  openGraph: {
    title: "wind energy assessment in Vadodara | VadodaraExperts",
    description: "Professional wind energy assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/wind-energy-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wind-energy-assessment-vadodara" />;
}
