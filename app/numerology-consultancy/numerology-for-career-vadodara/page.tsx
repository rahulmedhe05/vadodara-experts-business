import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "numerology for career in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional numerology for career services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/numerology-for-career-vadodara" },
  openGraph: {
    title: "numerology for career in Vadodara | VadodaraExperts",
    description: "Professional numerology for career services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/numerology-for-career-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="numerology-for-career-vadodara" />;
}
