import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "husband wife dispute solution in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional husband wife dispute solution services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/husband-wife-dispute-solution-vadodara" },
  openGraph: {
    title: "husband wife dispute solution in Vadodara | VadodaraExperts",
    description: "Professional husband wife dispute solution services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/husband-wife-dispute-solution-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="husband-wife-dispute-solution-vadodara" />;
}
