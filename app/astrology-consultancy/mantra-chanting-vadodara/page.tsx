import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "mantra chanting in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional mantra chanting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/mantra-chanting-vadodara" },
  openGraph: {
    title: "mantra chanting in Vadodara | VadodaraExperts",
    description: "Professional mantra chanting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/mantra-chanting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mantra-chanting-vadodara" />;
}
