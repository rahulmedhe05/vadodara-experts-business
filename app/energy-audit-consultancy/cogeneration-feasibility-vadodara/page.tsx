import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "cogeneration feasibility in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional cogeneration feasibility services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/cogeneration-feasibility-vadodara" },
  openGraph: {
    title: "cogeneration feasibility in Vadodara | VadodaraExperts",
    description: "Professional cogeneration feasibility services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/cogeneration-feasibility-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cogeneration-feasibility-vadodara" />;
}
