import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "structural steel design in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional structural steel design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/structural-steel-design-vadodara" },
  openGraph: {
    title: "structural steel design in Vadodara | VadodaraExperts",
    description: "Professional structural steel design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/structural-steel-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-steel-design-vadodara" />;
}
