import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "factory act compliance in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional factory act compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/factory-act-compliance-vadodara" },
  openGraph: {
    title: "factory act compliance in Vadodara | VadodaraExperts",
    description: "Professional factory act compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/factory-act-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-act-compliance-vadodara" />;
}
