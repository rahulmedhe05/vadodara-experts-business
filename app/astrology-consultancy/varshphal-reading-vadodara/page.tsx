import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "varshphal reading in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional varshphal reading services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/varshphal-reading-vadodara" },
  openGraph: {
    title: "varshphal reading in Vadodara | VadodaraExperts",
    description: "Professional varshphal reading services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/varshphal-reading-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="varshphal-reading-vadodara" />;
}
