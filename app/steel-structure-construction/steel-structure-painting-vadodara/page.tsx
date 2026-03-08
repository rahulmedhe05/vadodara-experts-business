import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "steel structure painting in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional steel structure painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/steel-structure-painting-vadodara" },
  openGraph: {
    title: "steel structure painting in Vadodara | VadodaraExperts",
    description: "Professional steel structure painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/steel-structure-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-structure-painting-vadodara" />;
}
