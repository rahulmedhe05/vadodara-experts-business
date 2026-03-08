import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "factory safety audit in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional factory safety audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/factory-safety-audit-vadodara" },
  openGraph: {
    title: "factory safety audit in Vadodara | VadodaraExperts",
    description: "Professional factory safety audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/factory-safety-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-safety-audit-vadodara" />;
}
