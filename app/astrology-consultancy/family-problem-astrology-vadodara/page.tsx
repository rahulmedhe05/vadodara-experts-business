import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "family problem astrology in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional family problem astrology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/family-problem-astrology-vadodara" },
  openGraph: {
    title: "family problem astrology in Vadodara | VadodaraExperts",
    description: "Professional family problem astrology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/family-problem-astrology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="family-problem-astrology-vadodara" />;
}
