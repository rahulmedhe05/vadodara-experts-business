import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "business opening muhurat in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional business opening muhurat services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/business-opening-muhurat-vadodara" },
  openGraph: {
    title: "business opening muhurat in Vadodara | VadodaraExperts",
    description: "Professional business opening muhurat services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/business-opening-muhurat-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="business-opening-muhurat-vadodara" />;
}
