import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "daily horoscope consultation in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional daily horoscope consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/daily-horoscope-consultation-vadodara" },
  openGraph: {
    title: "daily horoscope consultation in Vadodara | VadodaraExperts",
    description: "Professional daily horoscope consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/daily-horoscope-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="daily-horoscope-consultation-vadodara" />;
}
