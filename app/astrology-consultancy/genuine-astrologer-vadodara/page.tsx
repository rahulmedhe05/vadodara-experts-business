import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "genuine astrologer in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional genuine astrologer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/genuine-astrologer-vadodara" },
  openGraph: {
    title: "genuine astrologer in Vadodara | VadodaraExperts",
    description: "Professional genuine astrologer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/genuine-astrologer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="genuine-astrologer-vadodara" />;
}
