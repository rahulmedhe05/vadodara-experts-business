import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "safety compliance audit in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional safety compliance audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/safety-compliance-audit-vadodara" },
  openGraph: {
    title: "safety compliance audit in Vadodara | VadodaraExperts",
    description: "Professional safety compliance audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/safety-compliance-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safety-compliance-audit-vadodara" />;
}
