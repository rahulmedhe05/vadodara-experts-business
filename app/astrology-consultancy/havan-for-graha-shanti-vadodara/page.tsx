import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "havan for graha shanti in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional havan for graha shanti services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/havan-for-graha-shanti-vadodara" },
  openGraph: {
    title: "havan for graha shanti in Vadodara | VadodaraExperts",
    description: "Professional havan for graha shanti services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/havan-for-graha-shanti-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="havan-for-graha-shanti-vadodara" />;
}
