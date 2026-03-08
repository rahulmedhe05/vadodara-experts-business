import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "female astrologer in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional female astrologer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/female-astrologer-vadodara" },
  openGraph: {
    title: "female astrologer in Vadodara | VadodaraExperts",
    description: "Professional female astrologer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/female-astrologer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="female-astrologer-vadodara" />;
}
