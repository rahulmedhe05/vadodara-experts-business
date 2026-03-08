import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "lo shu grid in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional lo shu grid services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/lo-shu-grid-vadodara" },
  openGraph: {
    title: "lo shu grid in Vadodara | VadodaraExperts",
    description: "Professional lo shu grid services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/lo-shu-grid-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lo-shu-grid-vadodara" />;
}
