import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "missing number remedies in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional missing number remedies services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/missing-number-remedies-vadodara" },
  openGraph: {
    title: "missing number remedies in Vadodara | VadodaraExperts",
    description: "Professional missing number remedies services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/missing-number-remedies-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="missing-number-remedies-vadodara" />;
}
