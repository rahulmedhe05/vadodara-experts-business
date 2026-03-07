import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "signature analysis in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional signature analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/signature-analysis-vadodara" },
  openGraph: {
    title: "signature analysis in Vadodara | VadodaraExperts",
    description: "Professional signature analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/signature-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="signature-analysis-vadodara" />;
}
