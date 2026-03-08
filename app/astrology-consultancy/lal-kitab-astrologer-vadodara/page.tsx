import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "lal kitab astrologer in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional lal kitab astrologer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/lal-kitab-astrologer-vadodara" },
  openGraph: {
    title: "lal kitab astrologer in Vadodara | VadodaraExperts",
    description: "Professional lal kitab astrologer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/lal-kitab-astrologer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lal-kitab-astrologer-vadodara" />;
}
