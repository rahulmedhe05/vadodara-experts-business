import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "pre-treatment anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional pre-treatment anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/pre-treatment-anodizing-vadodara" },
  openGraph: {
    title: "pre-treatment anodizing in Vadodara | VadodaraExperts",
    description: "Professional pre-treatment anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/pre-treatment-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-treatment-anodizing-vadodara" />;
}
