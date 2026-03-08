import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "high rise steel structure in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional high rise steel structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/high-rise-steel-structure-vadodara" },
  openGraph: {
    title: "high rise steel structure in Vadodara | VadodaraExperts",
    description: "Professional high rise steel structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/high-rise-steel-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-rise-steel-structure-vadodara" />;
}
