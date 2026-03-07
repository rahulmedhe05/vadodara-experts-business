import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "numerology consultation fee in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional numerology consultation fee services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/numerology-consultation-fee-vadodara" },
  openGraph: {
    title: "numerology consultation fee in Vadodara | VadodaraExperts",
    description: "Professional numerology consultation fee services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/numerology-consultation-fee-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="numerology-consultation-fee-vadodara" />;
}
