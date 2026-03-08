import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "renewable energy assessment in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional renewable energy assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/renewable-energy-assessment-vadodara" },
  openGraph: {
    title: "renewable energy assessment in Vadodara | VadodaraExperts",
    description: "Professional renewable energy assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/renewable-energy-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="renewable-energy-assessment-vadodara" />;
}
