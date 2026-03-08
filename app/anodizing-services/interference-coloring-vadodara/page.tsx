import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "interference coloring in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional interference coloring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/interference-coloring-vadodara" },
  openGraph: {
    title: "interference coloring in Vadodara | VadodaraExperts",
    description: "Professional interference coloring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/interference-coloring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interference-coloring-vadodara" />;
}
