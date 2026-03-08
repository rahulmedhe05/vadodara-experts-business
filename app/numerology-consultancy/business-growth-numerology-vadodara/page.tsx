import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "business growth numerology in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional business growth numerology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/business-growth-numerology-vadodara" },
  openGraph: {
    title: "business growth numerology in Vadodara | VadodaraExperts",
    description: "Professional business growth numerology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/business-growth-numerology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="business-growth-numerology-vadodara" />;
}
