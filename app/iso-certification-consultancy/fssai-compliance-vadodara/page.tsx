import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "FSSAI compliance in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional fssai compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/fssai-compliance-vadodara" },
  openGraph: {
    title: "FSSAI compliance in Vadodara | VadodaraExperts",
    description: "Professional fssai compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/fssai-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fssai-compliance-vadodara" />;
}
