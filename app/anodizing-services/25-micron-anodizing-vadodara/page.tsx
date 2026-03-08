import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "25 micron anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional 25 micron anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/25-micron-anodizing-vadodara" },
  openGraph: {
    title: "25 micron anodizing in Vadodara | VadodaraExperts",
    description: "Professional 25 micron anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/25-micron-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="25-micron-anodizing-vadodara" />;
}
