import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "staircase steel structure in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional staircase steel structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/staircase-steel-structure-vadodara" },
  openGraph: {
    title: "staircase steel structure in Vadodara | VadodaraExperts",
    description: "Professional staircase steel structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/staircase-steel-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="staircase-steel-structure-vadodara" />;
}
