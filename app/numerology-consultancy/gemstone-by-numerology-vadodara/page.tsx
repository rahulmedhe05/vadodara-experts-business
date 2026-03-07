import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "gemstone by numerology in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional gemstone by numerology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/gemstone-by-numerology-vadodara" },
  openGraph: {
    title: "gemstone by numerology in Vadodara | VadodaraExperts",
    description: "Professional gemstone by numerology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/gemstone-by-numerology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gemstone-by-numerology-vadodara" />;
}
