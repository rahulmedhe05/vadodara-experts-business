import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "hand reading expert in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional hand reading expert services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/hand-reading-expert-vadodara" },
  openGraph: {
    title: "hand reading expert in Vadodara | VadodaraExperts",
    description: "Professional hand reading expert services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/hand-reading-expert-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hand-reading-expert-vadodara" />;
}
