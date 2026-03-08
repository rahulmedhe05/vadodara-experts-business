import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "maturity number in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional maturity number services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/maturity-number-vadodara" },
  openGraph: {
    title: "maturity number in Vadodara | VadodaraExperts",
    description: "Professional maturity number services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/maturity-number-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="maturity-number-vadodara" />;
}
