import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "C purlin in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional c purlin services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/c-purlin-vadodara" },
  openGraph: {
    title: "C purlin in Vadodara | VadodaraExperts",
    description: "Professional c purlin services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/c-purlin-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="c-purlin-vadodara" />;
}
