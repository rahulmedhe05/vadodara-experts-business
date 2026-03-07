import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "astrology and vastu combined in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional astrology and vastu combined services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/astrology-and-vastu-combined-vadodara" },
  openGraph: {
    title: "astrology and vastu combined in Vadodara | VadodaraExperts",
    description: "Professional astrology and vastu combined services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/astrology-and-vastu-combined-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="astrology-and-vastu-combined-vadodara" />;
}
