import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "Z purlin in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional z purlin services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/z-purlin-vadodara" },
  openGraph: {
    title: "Z purlin in Vadodara | VadodaraExperts",
    description: "Professional z purlin services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/z-purlin-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="z-purlin-vadodara" />;
}
