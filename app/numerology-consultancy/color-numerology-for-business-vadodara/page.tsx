import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "color numerology for business in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional color numerology for business services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/color-numerology-for-business-vadodara" },
  openGraph: {
    title: "color numerology for business in Vadodara | VadodaraExperts",
    description: "Professional color numerology for business services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/color-numerology-for-business-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="color-numerology-for-business-vadodara" />;
}
