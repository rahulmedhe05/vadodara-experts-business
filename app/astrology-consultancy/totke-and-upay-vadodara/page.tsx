import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "totke and upay in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional totke and upay services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/totke-and-upay-vadodara" },
  openGraph: {
    title: "totke and upay in Vadodara | VadodaraExperts",
    description: "Professional totke and upay services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/totke-and-upay-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="totke-and-upay-vadodara" />;
}
