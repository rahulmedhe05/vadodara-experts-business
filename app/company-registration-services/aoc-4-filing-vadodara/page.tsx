import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "AOC 4 filing in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional aoc 4 filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/aoc-4-filing-vadodara" },
  openGraph: {
    title: "AOC 4 filing in Vadodara | VadodaraExperts",
    description: "Professional aoc 4 filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/aoc-4-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aoc-4-filing-vadodara" />;
}
