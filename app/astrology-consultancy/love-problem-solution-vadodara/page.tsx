import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "love problem solution in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional love problem solution services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/love-problem-solution-vadodara" },
  openGraph: {
    title: "love problem solution in Vadodara | VadodaraExperts",
    description: "Professional love problem solution services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/love-problem-solution-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="love-problem-solution-vadodara" />;
}
