import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "solar feasibility study in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional solar feasibility study services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/solar-feasibility-study-vadodara" },
  openGraph: {
    title: "solar feasibility study in Vadodara | VadodaraExperts",
    description: "Professional solar feasibility study services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/solar-feasibility-study-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-feasibility-study-vadodara" />;
}
