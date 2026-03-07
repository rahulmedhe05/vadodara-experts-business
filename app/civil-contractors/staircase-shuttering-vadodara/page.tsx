import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Staircase shuttering in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional staircase shuttering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/staircase-shuttering-vadodara" },
  openGraph: {
    title: "Staircase shuttering in Vadodara | VadodaraExperts",
    description: "Professional staircase shuttering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/staircase-shuttering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="staircase-shuttering-vadodara" />;
}
