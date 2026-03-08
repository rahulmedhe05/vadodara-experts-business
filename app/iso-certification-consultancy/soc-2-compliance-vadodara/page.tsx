import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "SOC 2 compliance in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional soc 2 compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/soc-2-compliance-vadodara" },
  openGraph: {
    title: "SOC 2 compliance in Vadodara | VadodaraExperts",
    description: "Professional soc 2 compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/soc-2-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soc-2-compliance-vadodara" />;
}
