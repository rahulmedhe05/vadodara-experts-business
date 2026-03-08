import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Factory act compliance in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional factory act compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/factory-act-compliance-vadodara" },
  openGraph: {
    title: "Factory act compliance in Vadodara | VadodaraExperts",
    description: "Professional factory act compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/factory-act-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-act-compliance-vadodara" />;
}
