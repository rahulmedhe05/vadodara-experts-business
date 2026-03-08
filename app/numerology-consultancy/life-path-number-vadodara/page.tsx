import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "life path number in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional life path number services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/life-path-number-vadodara" },
  openGraph: {
    title: "life path number in Vadodara | VadodaraExperts",
    description: "Professional life path number services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/life-path-number-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="life-path-number-vadodara" />;
}
