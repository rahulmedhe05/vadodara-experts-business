import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "factory act safety compliance in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional factory act safety compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/factory-act-safety-compliance-vadodara" },
  openGraph: {
    title: "factory act safety compliance in Vadodara | VadodaraExperts",
    description: "Professional factory act safety compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/factory-act-safety-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-act-safety-compliance-vadodara" />;
}
