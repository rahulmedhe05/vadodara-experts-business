import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Combined ISO audit in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional combined iso audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/combined-iso-audit-vadodara" },
  openGraph: {
    title: "Combined ISO audit in Vadodara | VadodaraExperts",
    description: "Professional combined iso audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/combined-iso-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="combined-iso-audit-vadodara" />;
}
