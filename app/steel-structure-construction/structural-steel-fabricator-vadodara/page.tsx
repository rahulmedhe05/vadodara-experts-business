import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "structural steel fabricator in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional structural steel fabricator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/structural-steel-fabricator-vadodara" },
  openGraph: {
    title: "structural steel fabricator in Vadodara | VadodaraExperts",
    description: "Professional structural steel fabricator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/structural-steel-fabricator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-steel-fabricator-vadodara" />;
}
