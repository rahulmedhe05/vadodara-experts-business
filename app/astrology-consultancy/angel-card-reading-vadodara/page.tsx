import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "angel card reading in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional angel card reading services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/angel-card-reading-vadodara" },
  openGraph: {
    title: "angel card reading in Vadodara | VadodaraExperts",
    description: "Professional angel card reading services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/angel-card-reading-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="angel-card-reading-vadodara" />;
}
