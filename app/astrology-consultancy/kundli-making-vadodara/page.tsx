import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "kundli making in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional kundli making services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/kundli-making-vadodara" },
  openGraph: {
    title: "kundli making in Vadodara | VadodaraExperts",
    description: "Professional kundli making services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/kundli-making-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kundli-making-vadodara" />;
}
